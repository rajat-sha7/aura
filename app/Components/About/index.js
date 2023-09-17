import React from 'react'
import "../../globals.css"
import AboutHero from './AboutHero/AboutHero';
import WhatweDo from './WhatSection/WhatweDo';
import OurStory from './OurStory/OurStory';
import Work from './Work/Work';

export default function index() {
  return (
    <div>
      <AboutHero/>
      <WhatweDo/>
      <OurStory/>
      <Work/>
    </div>
  )
}
