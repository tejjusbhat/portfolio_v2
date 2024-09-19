import githubIcon from "@/public/images/github.svg";
import linkedinIcon from "@/public/images/linkedin.svg";
import xIcon from "@/public/images/xicon.svg";
import resumeIcon from "@/public/images/resume.svg";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <div className="w-[8%] h-full flex items-end justify-center">
      <div className="flex flex-col items-center gap-10">
        <Link href="https://github.com/tejjusbhat" target="_blank" title="Github">
          <Image src={githubIcon} alt="Github" className="w-6 h-6 hover:scale-110 hover:cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/tejjusbhat/" target="_blank" title="LinkedIn">
          <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-110" />
        </Link>
        <Link href="https://twitter.com/tejjusbhat" target="_blank" title="X (formerly Twitter)">
          <Image src={xIcon} alt="X" className="w-6 h-6 hover:scale-110" />
        </Link>
        <Link href="https://drive.google.com/file/d/1jFPUKQqGeqHnNjqmmhZu1CcPKUAkYIem/view?usp=drive_link" target="_blank" title="Resume">
          <Image src={resumeIcon} alt="Resume" className="w-6 h-auto hover:scale-110" />
        </Link>
        <div className="w-[1px] h-28 bg-text"></div>
      </div>
    </div>
  );
}
