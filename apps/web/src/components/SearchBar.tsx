// components/SearchBar.tsx
type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <label className="flex w-full min-w-40 max-w-64 h-10">
      <div className="flex w-full items-center rounded-lg bg-[#f0f2f5]">
        <div className="pl-4 text-[#60748a]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06..." />
          </svg>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-[#f0f2f5] px-4 py-2 text-sm text-[#111418] placeholder-[#60748a] outline-none"
        />
      </div>
    </label>
  );
}
