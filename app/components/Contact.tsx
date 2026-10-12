import Link from "next/link";

export default function Contact(){
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs font-mono text-[#7c6cfc] tracking-[0.18em] uppercase">
            05 — CONTACT
          </span>

          <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold text-[#f0ece5] mt-4 mb-6 leading-[1.05]">Let-&apos;s build something great.</h2>
          <p className="text-[#7a7a90] leading-relaxed mb-10 max-w-md">Available for fullstack development projects, UI/UX design work, and design-engineering consulting. Always open to interesting challenges.</p>
          <div className="space-y-3">
            <Link href="mailto:matheusmagalhaes816@gmail.com" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0d0d14] hover:border-[#7c6cfc]/40 hover:bg-[#7c6cfc]/[0.04] group transition-all duration-200">
              <span className="text-xs font-mono text-[#7a7a90] tracking-wide">E-mail</span>
              <span className="text-sm text-[#f0ece5]/70 group-hover:text-[#7c6cfc] transition-colors duration-200">matheusmagalhaes816@gmail.com →</span>
            </Link>
            <Link href="https://github.com/MattSM22" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0d0d14] hover:border-[#7c6cfc]/40 hover:bg-[#7c6cfc]/[0.04] group transition-all duration-200">
              <span className="text-xs font-mono text-[#7a7a90] tracking-wide">Github</span>
              <span className="text-sm text-[#f0ece5]/70 group-hover:text-[#7c6cfc] transition-colors duration-200">github.com/MattSM22 →</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mattsm-dev/" className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#0d0d14] hover:border-[#7c6cfc]/40 hover:bg-[#7c6cfc]/[0.04] group transition-all duration-200">
              <span className="text-xs font-mono text-[#7a7a90] tracking-wide">LinkedIn</span>
              <span className="text-sm text-[#f0ece5]/70 group-hover:text-[#7c6cfc] transition-colors duration-200">linkedin.com/in/mattsm-dev  →</span>
            </Link>
          </div>
        </div>
        <div>
          <form action="" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[#7a7a90] tracking-[0.14em] uppercase mb-2">Name</label>
              <input 
                id="name" 
                placeholder="Your name"
                className="w-full px-4 py-3 text-sm text-[#f0ece5] bg-[#0d0d14] border border-white/[0.09] rounded-xl focus:outline-none focus:border-[#7c6cfc]/60 focus:bg-[#7c6cfc]/[0.03] placeholder:text-[#7a7a90]/40 transition-all duration-200" 
                type="text" 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[#7a7a90] tracking-[0.14em] uppercase mb-2">Email</label>
              <input 
                id="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm text-[#f0ece5] bg-[#0d0d14] border border-white/[0.09] rounded-xl focus:outline-none focus:border-[#7c6cfc]/60 focus:bg-[#7c6cfc]/[0.03] placeholder:text-[#7a7a90]/40 transition-all duration-200" 
                type="email" 
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[#7a7a90] tracking-[0.14em] uppercase mb-2">Message</label>
              <textarea 
                id="message" 
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 text-sm text-[#f0ece5] bg-[#0d0d14] border border-white/[0.09] rounded-xl focus:outline-none focus:border-[#7c6cfc]/60 focus:bg-[#7c6cfc]/[0.03] placeholder:text-[#7a7a90]/40 transition-all duration-200 resize-none" 
                required
              />
            </div>
            <button type="submit" className="w-full px-6 py-3.5 bg-[#7c6cfc] text-white text-sm font-medium rounded-xl hover:bg-[#6a5ae8] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#7c6cfc]/20">Send message</button>
          </form> 
        </div>
      </div>
    </section>
  )
}