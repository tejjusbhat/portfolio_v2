import scrolldownImage from "@/public/images/scrolldown.svg"
import Image from "next/image"

const Scrolldown = () => {
  return (
    <div className="absolute flex flex-col items-center bottom-0 right-[15%] translate-x-[50%]">
      {/* <span className="text-4xl text-text">SCROLL</span> */}
      <Image src={scrolldownImage} alt="scroll_arrow" className="h-24 w-auto"/>
      <Image src={scrolldownImage} alt="scroll_arrow" className="h-24 w-auto"/>
      <Image src={scrolldownImage} alt="scroll_arrow" className="h-24 w-auto"/>
    </div>
  )
}

export default Scrolldown