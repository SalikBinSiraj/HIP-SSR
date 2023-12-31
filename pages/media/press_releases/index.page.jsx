export { Page }

import React from 'react'

import Header from '../../../components/global/header';
import Pr_spotlight from '../../../components/spotlight/pr_spotlight';
import Press_release_sec from '../../../components/sections/press_release_sec';
import News from '../../../components/sections/news';
import Footer from '../../../components/global/footer';

import Transition from '../../../components/transition';
import { useEffect , useRef } from 'react';
import { gsap, Power3, Power4 } from "gsap/dist/gsap";
import ITS_tab_sec1 from '../../../components/sections/ITS_tab_sec1';

function Page() {


  let body = useRef(null);
  var tl_1 = gsap.timeline()

  useEffect(() => {

    tl_1.to(body,{
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2
    });
    return () => {
      tl_1.to(body, {
        opacity: "0",
        pointerEvents: 'none'
      });
    }

  })

  return (
    <>
        <Transition/>
        <div className='home_page contact-pg pr_inside_pg'>
          <div ref={(el) => (body = el)} className="Headd">

            <div className='pr_inside_innerdv'>
              <Header/>
              <Pr_spotlight/>
              <Press_release_sec/>
              {/* <News/> */}
              <ITS_tab_sec1/>
              <Footer/>
            </div>



            </div>
        </div>
    </>
  )
}
