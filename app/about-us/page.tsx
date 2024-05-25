import About from "../components/aboutUs/About";
import Contact from "../components/aboutUs/Contact";
import Teams from "../components/aboutUs/Teams";

const page = () => {
    return (
        <div className=''>
            <Teams />
            <Contact />
            <About />
        </div>
    );
};

export default page;