import React from 'react'
import HeroCompoents from '../../components/HomeComponents/HeroCompoents/HeroCompoents'
import HomeSection from '../../components/HomeComponents/HomeSection/HomeSection'
import SectionDish from '../../components/HomeComponents/SectionDish/SectionDish'
import CulinaryComponent from '../../components/CulinaryComponent/CulinaryComponent'


function HomePages() {
  return (
    <main className='container'>
        <HeroCompoents/>
        <HomeSection/>
        <SectionDish/>
        <CulinaryComponent/>
    </main>
  )
}

export default HomePages
