import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioItem from '../components/PortfolioItem';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="intro">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm [Your Name], a passionate developer with a knack for creating dynamic and responsive web applications.</p>
                </section>
                <section className="featured-projects">
                    <h2>Featured Projects</h2>
                    <PortfolioItem 
                        title="Project One" 
                        description="A brief description of Project One." 
                        link="https://link-to-project-one.com" 
                    />
                    <PortfolioItem 
                        title="Project Two" 
                        description="A brief description of Project Two." 
                        link="https://link-to-project-two.com" 
                    />
                    <PortfolioItem 
                        title="Project Three" 
                        description="A brief description of Project Three." 
                        link="https://link-to-project-three.com" 
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;