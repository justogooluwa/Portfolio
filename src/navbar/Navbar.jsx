import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";





function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      let lagosTime = now.toLocaleTimeString("en-NG", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      
      lagosTime = lagosTime.replace(":", ".");

      setTime(lagosTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl py-3 px-5 mx-auto">
         
          <div className="flex items-center">
            <a href="/" class='text-2xl font-bold tracking-tight text-black'>AO</a>
          </div>

          <div className="hidden text-xs uppercase tracking-widest text-black/90 md:block">
            <p className="flex items-center gap-2 font-bold text-sm">
               Lagos, Nigeria
               <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
               </span>
            </p>
            <p className="text-black/60 text-sm">
                 — {time}
            </p>
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="no-underline font-medium hover:text-yellow-300 transition">Home</NavLink>
            <NavLink to="/about" className="no-underline font-medium hover:text-yellow-300 transition">About</NavLink>
            <NavLink to="/projects" className="no-underline font-medium hover:text-yellow-300 transition">Projects</NavLink>
            <NavLink to="/contact" className="no-underline font-medium hover:text-yellow-300 transition">Contact</NavLink>
          </div>

          
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" style={{width:28, height:28}}/>
            </button>
          </div>
        </div>

      
        {isOpen && (
          <div className="md:hidden px-5 pb-4" data-aos="slide-up">
            <div className="flex flex-col space-y-6">
              <NavLink to="/" onClick={toggleMenu} className="no-underline font-medium hover:text-yellow-300 transition">Home</NavLink>
              <NavLink to="/about" onClick={toggleMenu} className="no-underline font-medium hover:text-yellow-300 transition">About</NavLink>
              <NavLink to="/projects" onClick={toggleMenu} className="no-underline font-medium hover:text-yellow-300 transition">Projects</NavLink>
              <NavLink to="/contact" onClick={toggleMenu} className="no-underline font-medium hover:text-yellow-300 transition">Contact</NavLink>
            </div>

          <div className="mt-6 flex flex-col items-center text-center text-xs uppercase tracking-widest text-black/90">
  <p className="flex items-center gap-2 font-bold text-sm">
    Lagos, Nigeria
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
    </span>
  </p>
  <p className="text-black/60 text-sm">
    — {time}
  </p>
</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
