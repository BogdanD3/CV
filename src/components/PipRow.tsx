interface Props {
  total: number;
  maxGold: number;
}

export default function PipRow({ total, maxGold }: Props) {
  return (
    <div className="flex justify-center gap-[3px] mt-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-[6px] h-[6px] border ${
            i < maxGold
              ? 'bg-amber-400 border-amber-400'
              : 'bg-violet-600 border-violet-600'
          }`}
        />
      ))}
    </div>
  );
}
