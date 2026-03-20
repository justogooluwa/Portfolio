

function Cards(){
    return(
        <>
        <div className="py-16 px-6 lg:px-20 bg-gradient-to-r from-indigo-50 via-white to-purple-50" data-aos="slide-up">
         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center" >
           <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition" >
             <h3 className="text-4xl font-extrabold text-indigo-600 mb-3">
                <span>50</span>
                +
             </h3>
             <p className="text-gray-700 font-medium">Satisfied Clients</p>
           </div>
              
               <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
             <h3 className="text-4xl font-extrabold text-indigo-600 mb-3">
                <span>101</span>
                +
             </h3>
             <p className="text-gray-700 font-medium">Projects Completed</p>
           </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
             <h3 className="text-4xl font-extrabold text-indigo-600 mb-3">
                <span>74</span>
                +
             </h3>
             <p className="text-gray-700 font-medium">Happy Customers</p>
           </div>
         </div>
        </div>

        <section id="contact" className="bg-white px-6 py-20 md:px-16 lg:px-24">
             <div style={{opacity: 1, transform: 'none'}}>
             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight mb-16">
                Have a project in mind?
             </h2>
             <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-24">
              <div className="max-w-lg space-y-6" style={{opacity: 1, transform: 'none'}}>
             <p className="text-base text-black/80 leading-relaxed">
             If you want to chat about a project — send me a message on these platforms
             </p>
             <p className="text-base text-black/80 leading-relaxed">
                I help startups design and build fast, scalable websites and digital products, create solid design systems, and ship clean, high-performing interfaces.
             </p>
              </div>

              <div className="flex flex-col gap-2" style={{opacity: 1, transform: 'none'}}>
               <a href="https://t.me/justogooluwa"
               className="text-lg md:text-xl font-semibold text-black underline underline-offset-4 decoration-1 hover:decoration-2 hover:scale-110 inline-block origin-left transition-all duration-200"
               style={{opacity: 1, transform: 'none'}}
               >Telegram</a>

               <a href="https://wa.me/2349031455536"
               className="text-lg md:text-xl font-semibold text-black underline underline-offset-4 decoration-1 hover:decoration-2 hover:scale-110 inline-block origin-left transition-all duration-200"
               style={{opacity: 1, transform: 'none'}}
               >Whatsapp</a>
              </div>
             </div>
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

export default Cards;