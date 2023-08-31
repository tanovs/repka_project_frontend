export type ProgressBarProps = {
  progressPersentage: number;
  className?: string;
};

export default function ProgressBar({
  progressPersentage,
  className,
}: ProgressBarProps) {
  const width = `w-[12%]`;

  return (
    <div className={`${className} w-full rounded-3xl bg-basic-2`}>
      <div
        className={`h-2 rounded-3xl ${width} min-w-0 max-w-full bg-gradient-to-l from-[#FF9B34] to-[#FDD835]`}
        style={{ width: `${progressPersentage}%` }}
      ></div>
    </div>
  );
}
