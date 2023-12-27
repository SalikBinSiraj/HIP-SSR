import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Kothur_eoc from '../ease_of_connect_elsc/kothur_eoc';

import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'
import maximizeBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'

import kothurBlockA from '../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_A.png'
import kothurBlockB from '../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_B.png'
import kothurBlockC from '../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_C.png'
import kothurBlockE from '../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_E.png'
import kothurBlockF from '../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_F.png'

import popUpBlockA from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_A.jpg'
import popUpBlockB from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_B.jpg'
import popUpBlockC from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_C.jpg'
import popUpBlockD from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_D.jpg'
import popUpBlockE from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_E.jpg'
import popUpBlockF from '../../../../assets/img/elsc_landing_pg/Kothur_map/popup_img/Block_F.jpg'

export default function Kothur_slider_elsc() {

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

        {/*------------ Slide 1     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={kothurBlockA}></img>
                        <div className=' max_btn' target="11">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.26 MSFT</p>
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
                            <p>22</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>September 2023</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={kothurBlockA}></img>
                    <div className='maximize_btn' target="11">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block B</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={kothurBlockB}></img>
                        <div className=' max_btn' target="12">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.28 MSFT</p>
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
                            <p>19</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>August 2023</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={kothurBlockB}></img>
                    <div className='maximize_btn max_btn' target="12">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={kothurBlockC}></img>
                        <div className=' max_btn' target="13">
                            <img src={maximizeBtn}></img>
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
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>8</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Ready to move </p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={kothurBlockC}></img>
                    <div className='maximize_btn' target="13">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 4     */}
        {/* <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block D</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_D.png')}></img>
                        <div className=' max_btn' target="14">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.12 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Kothur_map/thumb/Kothur_Block_D.png')}></img>
                    <div className='maximize_btn' target="14">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div> */}

        {/*------------ Slide 5     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={kothurBlockE}></img>
                        <div className=' max_btn' target="15">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.19 MSFT</p>
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
                            <p>Floor strength:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={kothurBlockE}></img>
                    <div className='maximize_btn' target="15">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>


        {/*------------ Slide 6     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block F</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={kothurBlockF}></img>
                        <div className=' max_btn' target="16">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.20 MSFT</p>
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
                            <p>Floor strength:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={kothurBlockF}></img>
                    <div className='maximize_btn' target="16">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div11'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockA}></img>
        </div>

        <div className='prk_img_popup' id='div12'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockB}></img>
        </div>

        <div className='prk_img_popup' id='div13'>

            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockC}></img>
        </div>

        <div className='prk_img_popup' id='div14'>

            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockD}></img>
        </div>

        <div className='prk_img_popup' id='div15'>

            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockE}></img>
        </div>

        <div className='prk_img_popup' id='div16'>

            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockF}></img>
        </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
