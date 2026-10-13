import Link from "next/link";

export default function Footer(){
  return(
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="#" className="font-display text-lg font-bold text-[#f0ece5]">
          MSM
          <span className="text-[#7c6c7c]">.</span>
        </Link>
        <span className="text-xs font-mono text-[#7a7a90]">© 2024 Alex Ferreira — Fullstack Developer & UI/UX Designer.</span>
      
      <div className="flex gap-6">
        <Link href="https://github.com/MattSM22" className="text-xs text-[#7a7a90] hover:text-[#f0ece5] transition-colors">Github</Link>
        <Link href="https://www.linkedin.com/in/mattsm-dev/" className="text-xs text-[#7a7a90] hover:text-[#f0ece5] transition-colors">LinkedIn</Link>
      </div>
      </div>
    </footer>
  )
}