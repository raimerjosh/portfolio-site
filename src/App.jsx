import React from 'react';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';

export function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}
