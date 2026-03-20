import { NavLink } from "react-router-dom";
import heroimg from "../../assets/hh-DSbe9sGf.webp"
function HeroSection (){
    return(
        <>
         <section className="relative flex min-h-screen flex-col justify-between bg-white px-6 pb-8 pt-32 md:px-16 lg:px-24">
           <div className="flex flex-1 flex-col items-center justify-center gap-8" style={{opacity: 1}}>
           <h1 className="flex flex-wrap items-center justify-center gap-4 text-center text-7xl font-light tracking-tight text-black sm:text-8xl md:gap-8 md:text-9xl lg:text-[10rem]">
            <span style={{opacity: 1, transform: 'none'}}>Akinleye</span>
            <span className="text-black/60" style={{opacity: 1, transform: 'none'}}>—</span>
            <span style={{opacity: 1, transform: 'none'}}>Ogooluwa</span>
           </h1>
           <div className="flex max-w-2xl flex-col items-end gap-6 self-end text-right" style={{opacity: 1, transform: 'none'}}>
              <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
                <span className="text-black">
                    Full Stack Developer with proven experience building and scaling products from 0 to 1
                </span>{" "}
                <span className="text-black/40">
                      in fast-paced startup environments.
                </span>
              </p>
              <a href="/about" className="flex items-center gap-3 text-xs uppercase tracking-widest text-black/60 transition-colors hover:text-black">
                <span>[ABOUT ME]</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                     →
                </span>
              </a>
           </div>
           </div>

           <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" style={{opacity: 1}}>
              <div className="text-sm uppercase tracking-widest text-black/90">
                 <p>Full Stack Developer</p>
                 <p className="text-black/60">Based in Lagos, Nigeria</p>
              </div>

               <div className="text-sm uppercase tracking-widest text-black/90">
               <p className="text-black/60">Specializing in</p>
                 <p>Building Scalable products from 0 to 1</p>
              </div>

               <div className="text-sm uppercase tracking-widest text-black/90">
                 <span>[SCROLL]</span>
              </div>
           </div>
           
         </section>


        
        </>
    )
}

export default HeroSection;