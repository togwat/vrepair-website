import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Seo from '../../components/SeoHead'
import { HOME_ROUTE } from '../../constants/Paths'

export default function Home() {
    return (
        <>
            <Seo 
                title={"E-Store | Phone, Tablet & Computer Repairs in Milford"}
                description={"iPhone, Samsung, iPad and laptop repairs in Milford, North Shore. Free quotes, no fix no fee, 3–6 month warranty. Walk in or book online."}
                path={HOME_ROUTE}
            />
            <Navbar />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </>
    )
}