import React from 'react';
import Experience from './Experience';
import Educations from './Educations';
import Skills from './Skills';
import Portfolios from './Portfolios';
import Profile from './Profile';
import Navbar from './Navbar';
import About from './About';

const Home = () =>{
    return(
        <section>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 l3'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l8'>
                        <About />
                        <Skills />
                        <Experience />
                        <Educations />
                        <Portfolios />
                    </div>
                </div>

            </div>
        </section>
    )
}


export default Home;
