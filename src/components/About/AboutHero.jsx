
import ogo from "../../assets/ogo.png"

function AboutHero(){
    return(
        <>
        <section className="relative flex min-h-screen flex-col bg-white px-8 py-12 md:px-12 lg:px-16">
        <div className="flex flex-1 flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
         <div className="flex flex-col justify-center lg:pt-24" style={{opacity: 1, transform: "none"}}>
           <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[9rem] font-light leading-[0.9] tracking-tight text-black">
            Web
            <br></br>
            Developer
           </h1>
         </div>
         <div className="flex flex-col items-end gap-8 lg:gap-12 lg:pt-8" style={{opacity: 1, transform: "none"}}>
          <div className="relative w-[180px] h-[220px] sm:w-[200px] sm:h-[250px] md:w-[240px] md:h-[300px] overflow-hidden rounded-sm">
         <img src={ogo} alt="Portrait" className="object-cover"  sizes="100vw" />
          </div>
          <div className="max-w-[280px] text-right" style={{opacity: 1, transform: "none"}}>
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-black tracking-wide line-clamp-3">
            Hi i'm Akin, Passionate helping startups launch high-quality, performance-driven products.
          </p>
          </div>
         </div>
        </div>
        <div className="mt-20 md:mt-32 max-w-4xl" style={{opacity: 1, transform: "none"}}>
         <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8">About Me</h2>
         <p className="text-base md:text-lg leading-relaxed text-black/70">
          Full Stack Developer with experience building and scaling products from 0 to 1 in fast-paced 
          startup environments. Skilled in JavaScript, React, Next.js, Node.js, REST APIs, and Tailwind CSS,
           with a product-first mindset focused on performance, usability, and rapid iteration. Expert
            in crafting interactive, engaging interfaces using GSAP and Framer Motion, and integrating 
            Backend-as-a-Service (BaaS) platforms for authentication, data handling, and real-time updates.
             Experienced in ecommerce and Shopify-based solutions, delivering seamless user experiences,
              as well as AI-assisted agent design to enhance product capabilities and user productivity.
               Thrives in lean, cross-functional teams, taking end-to-end ownership from concept to deployment.
                Passionate about building scalable, user-focused solutions that combine technical excellence,
                 design sensibility, and product intuition, helping startups launch high-quality,
                  performance-driven products that delight users and drive growth.
         </p>
        </div>
        </section>

         <section className="px-6 py-16 md:px-16 lg:px-24 border-b border-black/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
             style={{opacity: 1, transform: 'none'}}>
             Let's Connect
             </h2>
             <a href="mailto:ogooluwaakinleye29@gmail.com" className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full hover:bg-black/80 transition-colors w-fit"
             style={{opacity: 1, transform: 'none'}}>
              <span className="text-xl">»</span>
              <span className="text-sm font-medium">Hire Me Now!</span>
             </a>
            </div>
         </section>
          
        </>
    )
}

export default AboutHero;