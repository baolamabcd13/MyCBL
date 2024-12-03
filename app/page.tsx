import Hero from "@/app/components/LandingPage/Hero";
import Products from "@/app/components/LandingPage/Products";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Products />
      {/* Các components khác */}
    </main>
  );
}
