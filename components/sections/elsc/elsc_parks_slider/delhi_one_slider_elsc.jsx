import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Delhi_one_eoc from '../ease_of_connect_elsc/delhi_one_eoc';

import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'
import maxBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'

import delhiBlockA from '../../../../assets/img/elsc_landing_pg/Delhi_I_map/thumb/Delhi_I_Block_A.png'
import delhiBlockC from '../../../../assets/img/elsc_landing_pg/Delhi_I_map/thumb/Delhi_I_Block_C.png'

import popupDelhiC from '../../../../assets/img/elsc_landing_pg/Delhi_I_map/popup_img/Delhi_I_Block_C.jpg'
import popupDelhiA from '../../../../assets/img/elsc_landing_pg/Delhi_I_map/popup_img/Block_A.jpg'

export default function Delhi_one_slider_elsc() {
    const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;

    const elsc_prk_sld = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800
    };



  return (
    <>
      <SliderComponent {...elsc_prk_sld} className='elsc_prk_sld'>

        {/*------------ Slide 1     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={delhiBlockA}></img>
                        <div className='max_btn' target="6">
                            <img src={maxBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.08 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Q2 2024</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Delhi_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={delhiBlockA}></img>
                    <div className='maximize_btn' target="6">
                        <img src={maxBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={delhiBlockC}></img>
                        <div className=' max_btn' target="7">
                            <img src={maxBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.05 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>-</p>
                        </div> */}
                        {/* <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Q2 2024</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Delhi_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={delhiBlockC}></img>
                    <div className='maximize_btn' target="7">
                        <img src={maxBtn}></img>
                    </div>
                </div>
            </div>

        </div>

      </SliderComponent>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

      <div className='prk_img_popup' id='div6'>
        <a className='prk_img_popup_close'>
            <img src={cancel}></img>
        </a>
        <img className='elsc_park_map_img ' src={popupDelhiA}></img>
      </div>

      <div className='prk_img_popup' id='div7'>
        <a className='prk_img_popup_close'>
            <img src={cancel}></img>
        </a>
        <img className='elsc_park_map_img ' src={popupDelhiC}></img>
      </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
