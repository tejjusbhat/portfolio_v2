import Link from "next/link";

export default function RightSidebar() {
  return (
    <div className="w-[8%] h-full flex items-start justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="w-[1px] h-28 bg-text"></div>
        <span className="font-normal text-s tracking-widest text-primary" style={{ writingMode: 'vertical-rl', transformOrigin: 'center' }}><Link href="mailto:tejjusbhat@gmail.com">tejjusbhat@gmail.com</Link></span>
      </div>
    </div>
  )
}
