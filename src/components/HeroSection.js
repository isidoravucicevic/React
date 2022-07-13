import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        
        <h1>HEY EXPLORERS, LET'S TRAVEL THE WORLD TOGETHER!</h1>
        <p>You comming?</p>
   
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/sign-up'
            >
                GET STARTED
            </Button>
        </div>
    </div>
   
  )
}

export default HeroSection;
