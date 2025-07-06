type ToolCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ToolCard = ({ icon, title, description }: ToolCardProps) => (
  <div className="flex flex-col gap-3 p-4 bg-white border border-[#dbe0e6] rounded-lg">
    <div>{icon}</div>
    <div>
      <h2 className="text-base font-bold text-[#111418]">{title}</h2>
      <p className="text-sm text-[#60748a]">{description}</p>
    </div>
  </div>
);

export default ToolCard;
