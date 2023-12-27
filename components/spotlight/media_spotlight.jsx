import React from 'react'
import '../../assets/css/park_inside_spotlight.css';

import pressRelease from '../../assets/img/press_release.jpg'
import arrow from '../../assets/img/home_sldr_arrow.png'

export default function Media_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <img src={pressRelease} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={arrow}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Media</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='spotlight_content_dv'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title'>Media</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
