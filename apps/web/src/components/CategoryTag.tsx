// components/CategoryTag.tsx
type CategoryTagProps = {
  label: string;
};

export default function CategoryTag({ label }: CategoryTagProps) {
  return (
    <div className="px-4 h-8 flex items-center rounded-lg bg-[#f0f2f5]">
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
