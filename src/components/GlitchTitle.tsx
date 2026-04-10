import { useEffect, useState } from 'react';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#@%&';

function glitchText(original: string): string {
  return original
    .split('')
    .map((c) =>
      c !== ' ' && Math.random() < 0.15
        ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        : c
    )
    .join('');
}

interface Props {
  text: string;
}

export default function GlitchTitle({ text }: Props) {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.25) {
        setGlitching(true);
        let count = 0;
        const rapid = setInterval(() => {
          setDisplay(glitchText(text));
          count++;
          if (count > 6) {
            clearInterval(rapid);
            setDisplay(text);
            setGlitching(false);
          }
        }, 60);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-center py-5 relative">
      <h1
        className={`font-pixel text-2xl md:text-3xl text-white tracking-widest relative inline-block
          ${glitching ? 'text-shadow-glitch' : ''}`}
        style={{
          textShadow: glitching
            ? '-2px 0 #ec4899, 2px 0 #14b8a6'
            : 'none',
        }}
      >
        {display}
        <span className="animate-blink">_</span>
      </h1>
      <p className="font-pixel text-[8px] text-violet-400 mt-2 tracking-widest">
        FULLSTACK DEVELOPER · CS STUDENT
      </p>
      <p className="font-pixel text-[7px] text-teal-400 mt-1">
        📍 PODGORICA, MONTENEGRO 🇲🇪
      </p>
    </div>
  );
}
