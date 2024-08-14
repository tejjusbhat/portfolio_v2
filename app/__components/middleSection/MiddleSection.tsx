import Hero from "./Hero"
import Scrolldown from "../Scrolldown"

export default function MiddleSection() {
  return (
    <div className="h-full w-[84%] relative overflow-y-auto no-scrollbar">
      <Hero />
      <Scrolldown />
    </div>
  )
}