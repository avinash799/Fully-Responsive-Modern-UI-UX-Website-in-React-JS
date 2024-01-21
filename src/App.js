import React from 'react'
import Article from "./component/Article/Article";
import Cta from "./component/Cta/Cta";
import Feature from "./component/Feature/Feature";
import NavBar from "./component/Navbar/NavBar";
import Brand from "./component/Brand/Brand";

import {Blog,Footer,Header,Possibility,Whatgpt3}from './container';
import './App.css';

const App = () => {
  return (
    <div className='App'>
       <div className='gradient_bg'>
        <NavBar/>
        <Header/>
       </div>
       <Brand/>
       <Whatgpt3/>
       <Feature/>
       <Possibility/>
       <Cta/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default App