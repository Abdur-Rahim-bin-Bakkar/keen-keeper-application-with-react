import Friends from '../Friend/Friends';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar.jsx/Navbar';

const Home = () => {
    return (
        <div className='bg-[#f8fafc]'>
            <Hero/>
            <Friends/>
        </div>
    );
};

export default Home;