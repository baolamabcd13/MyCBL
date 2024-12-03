import Hero from "@/app/components/DefaultLayout/Hero";
import ProductPage from "./(public)/products/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <ProductPage />
      {/* Các components khác */}
    </main>
  );
}
