import textosJson from '@/textos.json';
import notebook from '@/app/assets/notebook.png';
import Image from 'next/image';
import CodeCard from '../utils/CodeCard';

export default function About(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col gap-10">
        <h1 className="font-playfair text-7xl font-bold leading-[0.82] tracking-[-0.04em]">Design x Code as one craft.</h1>
        <p className="max-w-xl text-md leading-8 text-zinc-400">{textosJson.aboutMe}</p>

        <div className="flex flex-row items-center justify-items-start gap-16">
          <p className="font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="font-playfair block text-white text-3xl">4+</span>
            <span className="block text-zinc-400 text-xs">Years exp</span>
          </p>
          <p className="font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="font-playfair block text-white text-3xl">20+</span>
            <span className="block text-zinc-400 text-xs">Projects</span>
          </p>
          <p className="font-bold leading-[0.82] tracking-[-0.04em]">
            <span className="font-playfair block text-white text-3xl">8+</span>
            <span className="block text-zinc-400 text-xs">Squads served</span>
          </p>
        </div>
      </div>
        <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image src={notebook} alt="Notebook" className="aspect-[4/4.3] w-full rounded-[28px] object-cover"/>]
              <div className="absolute bottom-0.5 -left-6">
                <CodeCard />
              </div>
          </div>
        </div>
        
        
    </div>
  )
}