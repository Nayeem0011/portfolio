'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefore from './Pagefore';
import Pagefive from './Pagefive';
import Footer from './Footer';

const Body = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="min-h-screen flex flex-col">
                <div className="sticky top-0 z-50">
                    <NavBar />
                </div>
                <div id="home" className="px-4 sm:px-6 lg:px-8">
                    <HeroPage />
                </div>
                <Pageone />
                <div className="px-4 sm:px-6 lg:px-8">
                    <div id="about">
                        <Pagetwo />
                    </div>
                    <div id="skills">
                        <Pagethree />
                    </div>
                    <div id="projects">
                        <Pagefore />
                    </div>
                    <div id="contact">
                        <Pagefive />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Body;


