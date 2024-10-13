import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import githubIcon from '@/public/images/github.svg'
import linkedinIcon from '@/public/images/linkedin.svg'
import xIcon from '@/public/images/xicon.svg'
import resumeIcon from '@/public/images/resume.svg'

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-20 p-6 text-text bg-secondary">
      {/* Social Links */}
      <div className="flex gap-6 mb-4">
        <Link href="https://github.com/tejjusbhat" target="_blank" title="Github">
          <Image src={githubIcon} alt="Github" className="w-8 h-8 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://www.linkedin.com/in/tejjusbhat/" target="_blank" title="LinkedIn">
          <Image src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://twitter.com/tejjusbhat" target="_blank" title="X (formerly Twitter)">
          <Image src={xIcon} alt="X" className="w-8 h-8 hover:scale-110 transition-transform" />
        </Link>
        <Link href="https://drive.google.com/file/d/1jFPUKQqGeqHnNjqmmhZu1CcPKUAkYIem/view?usp=drive_link" target="_blank" title="Resume">
          <Image src={resumeIcon} alt="Resume" className="w-8 h-8 hover:scale-110 transition-transform" />
        </Link>
      </div>

      {/* Footer Text */}
      <a className="font-bold text-[1.5rem] text-white" href='https://medium.com/@tejjusbhat' target='_blank'>
        Visit my blog on Medium!
      </a>
    </div>
  )
}

export default Footer
