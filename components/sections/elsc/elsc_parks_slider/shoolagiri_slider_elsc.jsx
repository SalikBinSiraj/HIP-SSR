import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shoolagiri_eoc from '../ease_of_connect_elsc/shoolagiri_eoc';

import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'
import maximizeBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'

import hosurBlockB from '../../../../assets/img/elsc_landing_pg/Hosur_map/thumb/Hosur_I_Bloc_B.png'
import hosurBlockC from '../../../../assets/img/elsc_landing_pg/Hosur_map/thumb/Hosur_I_Block_C.png'
import hosurBlockD from '../../../../assets/img/elsc_landing_pg/Hosur_map/thumb/Hosur_I_Block_D.png'

import popupBlockB from '../../../../assets/img/elsc_landing_pg/Hosur_map/popup_img/Block_B.jpg'
import popupBlockC from '../../../../assets/img/elsc_landing_pg/Hosur_map/popup_img/Block_C.jpg'
import popupBlockD from '../../../../assets/img/elsc_landing_pg/Hosur_map/popup_img/Block_D.jpg'

export default function Shoolagiri_slider_elsc() {

    const elsc_prk_sld = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800
    };



  return (
    <>
      <Slider {...elsc_prk_sld} className='elsc_prk_sld'>

        {/*------------ Slide 1   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block B</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={hosurBlockB}></img>
                        <div className=' max_btn' target="19">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.16 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Ready for dry access</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Shoolagiri_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={hosurBlockB}></img>
                    <div className='maximize_btn' target="19">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>


        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block D</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={hosurBlockD}></img>
                        <div className=' max_btn' target="20">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.31 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>28</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>January 2024</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Shoolagiri_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={hosurBlockD}></img>
                    <div className='maximize_btn' target="20">
                        <img src={maximizeBtn}></img>
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
                        <img src={hosurBlockC}></img>
                        <div className=' max_btn' target="21">
                            <img src={maximizeBtn}></img>
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
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>12</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>December 2023</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Shoolagiri_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={hosurBlockC}></img>
                    <div className='maximize_btn' target="21">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div19'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlockB}></img>
        </div>

        <div className='prk_img_popup' id='div20'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlockD}></img>
        </div>

        <div className='prk_img_popup' id='div21'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popupBlockC}></img>
        </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
