// components/PromptCard.tsx
type PromptCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function PromptCard({ title, description, image }: PromptCardProps) {
  return (
    <div className="min-w-60 flex flex-col gap-3 rounded-lg">
      <div
        className="aspect-video w-full rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-[#60748a]">{description}</p>
      </div>
    </div>
  );
}
