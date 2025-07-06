const UsageCard = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-2 min-w-[158px] flex-1 p-6 border border-[#dbe0e6] rounded-lg">
    <p className="text-base font-medium text-[#111418]">{label}</p>
    <p className="text-2xl font-bold text-[#111418]">{value}</p>
  </div>
);

export default UsageCard;
