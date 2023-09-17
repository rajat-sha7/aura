import React from 'react'
import "../../globals.css"
import Hero from '../../Components/Homepage2/Hero/Hero'
import Client from '../Homepage2/Client/Client'
import Work from '../Homepage2/Work/Work'
import Consultant from './Consultant/Consultant'
import Service from '../Homepage2/Service/Service'
import Number from "../Homepage2/Numbers/Numbers"
import WhySection from '../Homepage2/WhySection/WhySection'
import Community from './Community/Community'
import Meating from './Meating/Meating'
import Cards from "./Community/CommunityCards/Cards"

export default function index() {
  return (
    <div>
      <Hero/>
      <Client/>
      <Work/>
      <Consultant/>
      <Service/>
      <Number/>
      <WhySection/>
      <Community/>
      <Meating/>
    </div>
  )
}
