// app/prompt-packs/page.tsx
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PromptCard from "@/components/PromptCard";
import CategoryTag from "@/components/CategoryTag";

const featuredPrompts = [
  {
    title: "Boost Your Business",
    description: "A collection of prompts to help you streamline your business operations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBJWTMI1t8LfJjkkPfSKswiQSNOybtj_PW4ALOT-xnXq5Z1YAxGO9mJ1WXe-YwmJmVKBDXVqc4ansScZh4qdxkbFTS9nXjOzR4LKK41i6BvtnTfdPy0G_C_6tJJAe22sE8YszTWyAPR2F4k137HPcJkf0TTKOjEztRUuc8qIWlXA_1RchNKnKqjOTd_RquiCubQXWWdtimTKpe0AZiySCT6Eb5bNlR8sMg1azPF0TXAzphvGuGssWAihfbm63VhrpP_myFZjwsv5fN",
  },
  {
    title: "Marketing Mastery",
    description: "Unlock the power of AI for your marketing campaigns.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdBhiPBWAc2-X8GyTJIK1alongUZEcBqJ8HCKKkrC0FNd2nvsA6_4spX_5bQL90wPqILDtf_iSb1Hu8eWzASMFpE3A_2Tn52dMlgRGTG5RclmU8rlwivcZxcqgp16cFXP68X-p6m6qlAhuCD9sx1ZXNvcrPWcxL1jKhsniMsRZE5YKygJiE9dq5d9mcade_K-Iiu-8EZhe54hSHY5b47bNIlgWKDgKtRhDAZYluhlNc8z1UdLRFF4aI0IJEDkUhfPABLahEhQ8VZdm",
  },
  {
    title: "Content Creation Pro",
    description: "Generate high-quality content effortlessly with these prompts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzNIww26BHmnCfSYHtws0klzGYaOCBXiQ7yqdShkyg4_1GBmgfuwpQcm7NRQ2wER3NQvQGu8OJw4zNqsvbDAVnN0_QBq1wu41-WEEmi83rRKPraRffSY14875wKJW_r0U_UI5pHOmhFFib1F-sNDV3YlYqCKD7AJfNyrmJrgpyDMgP_iQDt_TVao44h3WQaWbJ09XuZC0sEg1zF7aMvbylKvUjoorgttvMtOEXBtsqgCshq_n1NXqjO79EBevsjyDzI0bX3kfVvDcY",
  },
];

const categories = [
  "Business Strategy",
  "Marketing",
  "Content Creation",
  "Sales",
  "Customer Service",
  "Productivity",
];

export default function PromptPacksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111418]">
      <Header />
      <main className="flex flex-1 justify-center px-40 py-5">
        <div className="max-w-[960px] w-full">
          <section className="p-4">
            <h1 className="text-[32px] font-bold">Prompt Packs</h1>
            <p className="text-sm text-[#60748a]">
              Browse and purchase curated prompt packs to boost your productivity.
            </p>
          </section>

          <section className="px-4 py-3">
            <SearchBar placeholder="Search for prompt packs" />
          </section>

          <section className="px-4 pt-5 pb-3">
            <h2 className="text-[22px] font-bold">Featured</h2>
            <div className="flex overflow-x-auto gap-3 py-4">
              {featuredPrompts.map((prompt, index) => (
                <PromptCard key={index} {...prompt} />
              ))}
            </div>
          </section>

          <section className="px-4 pt-5 pb-3">
            <h2 className="text-[22px] font-bold">Categories</h2>
            <div className="flex flex-wrap gap-3 py-3">
              {categories.map((category, index) => (
                <CategoryTag key={index} label={category} />
              ))}
            </div>
          </section>

          {/* Add All Prompt Packs section here if needed */}
        </div>
      </main>
    </div>
  );
}
