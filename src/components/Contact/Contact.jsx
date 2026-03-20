import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Contact(){
    return(
        <>
        <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Let's Talk About Your Project</h2>
            <p className="text-gray-600 mb-8">Whether you need a website, app, or digital solution, we’re here to help you succeed.</p>
            <div className="space-y-4 text-gray-700">
              <div>
              <p className="flex items-center gap-3">
                <span className='lucide lucide-mail text-indigo-600'> <FontAwesomeIcon icon={faEnvelope}/></span>
                ogooluwaakinleye29@gmail.com</p>
              </div>
              <div>
                <p className="flex items-center gap-3">
                <span className='lucide lucide-mail text-indigo-600'> <FontAwesomeIcon icon={faPhone} /></span>
             +2349031455536</p>
             </div>
             <div>
              <p className="flex items-center gap-3">
              <span className='lucide lucide-mail text-indigo-600'> <FontAwesomeIcon icon={faLocationDot} /></span>
             Nigeria, Lagos</p>
             </div>
            </div>
        </div>
        <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter Your Name" required/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter Your Email" required/>
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea type="email"  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Write Your Message...." required rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-indigo-700 transition">Send Message</button>
        </form>
        </div>
        <section className="bg-white py-20 px-6 lg:px-20 text-center text-white">
         <h2 className="bg-white py-20 px-6 lg:px-20 text-center text-white">We believe in turning visions into reality. Let’s bring your next big project to life.</h2>
         <p className="text-lg mb-8 text-black">We believe in turning visions into reality. Let’s bring your next big project to life.</p>
         <a href="/contact" className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-indigo-100 transition">Get a free Quote</a>
        </section>
        </section>
        </>
    )
}

export default Contact;