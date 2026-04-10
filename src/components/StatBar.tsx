import { useEffect, useRef, useState } from 'react';

interface Props {
  label: string;
  pct: number;
  color: string;
}

export default function StatBar({ label, pct, color }: Props) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(pct), 100);
    return () => clearTimeout(timer);
  }, [pct]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-[9px] text-purple-400 w-7 flex-shrink-0 font-pixel">{label}</span>
      <div ref={ref} className="flex-1 h-[5px] bg-[#1a1040] border border-[#3d2a6e] overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-[9px] text-purple-400 w-7 text-right flex-shrink-0 font-pixel">{pct}%</span>
    </div>
  );
}
