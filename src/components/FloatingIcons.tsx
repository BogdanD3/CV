import { useMemo } from 'react';
import { FLOAT_ICONS } from '../data';

export default function FloatingIcons() {
  const icons = useMemo(() =>
    FLOAT_ICONS.map((icon, i) => ({
      icon,
      left: (i / FLOAT_ICONS.length) * 90 + Math.random() * 5,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 10,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
      {icons.map((item, i) => (
        <span
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${item.left}%`,
            animation: `floatUp ${item.duration}s ${item.delay}s linear infinite`,
          }}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}
