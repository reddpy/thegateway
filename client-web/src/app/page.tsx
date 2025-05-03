import HomePageNavbar from "@/components/internal/homepage-navbar";
import HomePageCTA from "@/components/internal/homepage-cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomePageNavbar />
      <div className="mx-auto flex flex-col items-center justify-center p-8 pt-14  shadow-lg">
        <HomePageCTA />
      </div>
    </div>
  );
}
