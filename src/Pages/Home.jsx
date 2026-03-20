import HeroSection from "../components/Home/HeroSection"
import Specialization from "../components/Home/Specialization"
import HeroSection2 from "../components/Home/HeroSection2"
import Proficiency from "../components/Home/Proficiency"
import Cards from "../components/Home/Cards"
function Home (){
    return(
        <>
        <HeroSection />
        <Specialization />
        <HeroSection2 />
        <Proficiency />
        <Cards />
        </>
    )
}

export default Home