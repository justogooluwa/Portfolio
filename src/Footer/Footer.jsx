
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

     
        <div>
          <a href="/" class='text- Black text-xs font-bold'>AO</a>
          <p className="mt-4 text-gray-400">
            Full Stack Developer passionate about building scalable, user-focused products from 0 to 1.
          </p>
        </div>

        
        <div>
          <h3 className="text-md font-semibold uppercase tracking-wider">ADDRESS</h3>
          <div className="mt-4 space-y-2 flex flex-col">
            <p className="text-sm text-black/60">Lagos, Nigeria</p>
            <p className="text-sm text-black/60">West Africa</p>
          </div>
        </div>

        
        <div>
          <h3 className="text-md font-semibold uppercase tracking-wider">EMAIL ADDRESS</h3>
           <div className="mt-4 space-y-2 flex flex-col">
            <a href="mailto:ogooluwaakinleye29@gmail.com" className="text-sm text-black/60">ogooluwaakinleye29@gmail.com</a>
          </div>
        </div>

       
        <div>
           <h3 className="text-md font-semibold uppercase tracking-wider">PHONE NUMBER</h3>
          <div className="mt-4 space-y-2 flex flex-col">
            <p className="text-sm text-black/60">+2349031455536</p>
            
          </div>
        </div>
      </div>

     <div className="flex items-end md:flex-row md:items-center md:justify-end gap-6 mb-8">
  <Link to="/" className="text-black/60 hover:text-black transition-colors">Home</Link>
  <Link to="/about" className="text-black/60 hover:text-black transition-colors">About</Link>
  <Link to="/projects" className="text-black/60 hover:text-black transition-colors">Projects</Link>
  <Link to="/contact" className="text-black/60 hover:text-black transition-colors">Contact</Link>
</div>

      
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
         All Rights Reserved @AO © 2026.
      </div>
    </footer>
  );
}

export default Footer;
