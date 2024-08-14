import LeftSidebar from "./__components/LeftSidebar";
import RightSidebar from "./__components/RightSidebar";
import MiddleSection from "./__components/middleSection/MiddleSection";

export default function Home() {
  return (
    <main className="w-screen h-screen flex bg-background">
      <LeftSidebar />
      <MiddleSection />
      <RightSidebar />
    </main>
  );
}
