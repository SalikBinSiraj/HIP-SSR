import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dobaspet_one_eoc from '../ease_of_connect_elsc/dobaspet_one_eoc';

import cancel from '../../../../assets/img/elsc_landing_pg/cancel.png'
import maximizeBtn from '../../../../assets/img/svg/elsc_landing/maximize_btn.svg'

import blockA from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_A.png'
import blockB from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_B.png'
import blockC from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_C.png'
import blockD from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_D.png'
import blockE from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_E.png'
import blockF from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_F.png'
import blockG from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_G.png'
import blockH from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_H.png'
import blockJ from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_J.png'

import popUpBlockA from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_A.jpg'
import popUpBlockB from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_B.jpg'
import popUpBlockC from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_C.jpg'
import popUpBlockD from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_D.jpg'
import popUpBlockE from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_E.jpg'
import popUpBlockF from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_F.jpg'
import popUpBlockG from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_G.jpg'
import popUpBlockH from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_H.jpg'
import popUpBlockJ from '../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_J.jpg'

export default function Dobaspet_slider_elsc() {
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

        {/*------------ Slide 1   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockA}></img>
                        <div className=' max_btn' target="28">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockA}></img>
                    <div className='maximize_btn' target="28">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block B</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockB}></img>
                        <div className=' max_btn' target="29">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockB}></img>
                    <div className='maximize_btn' target="29">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockC}></img>
                        <div className=' max_btn' target="30">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.34 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockC}></img>
                    <div className='maximize_btn' target="30">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 4   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block D</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockD}></img>
                        <div className=' max_btn' target="31">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockD}></img>
                    <div className='maximize_btn' target="31">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 5   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockE}></img>
                        <div className=' max_btn' target="32">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.21 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockE}></img>
                    <div className='maximize_btn' target="32">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 6   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block F</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockF}></img>
                        <div className=' max_btn' target="33">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.21 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>


                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockF}></img>
                    <div className='maximize_btn' target="33">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 7   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block G</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockG}></img>
                        {/* <div className=' max_btn' target="34">
                            <img src={maximizeBtn}></img>
                        </div> */}
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockG}></img>
                    <div className='maximize_btn' target="34">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 8   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block H</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockH}></img>
                        <div className=' max_btn' target="35">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.35 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockH}></img>
                    <div className='maximize_btn' target="35">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 9   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block J</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={blockJ}></img>
                        <div className=' max_btn' target="36">
                            <img src={maximizeBtn}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.54 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                         */}
                    </div>

                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>

                    <Dobaspet_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={blockJ}></img>
                    <div className='maximize_btn' target="36">
                        <img src={maximizeBtn}></img>
                    </div>
                </div>
            </div>

        </div>


      </SliderComponent>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div28'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockA}></img>
        </div>

        <div className='prk_img_popup' id='div29'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockB}></img>
        </div>

        <div className='prk_img_popup' id='div30'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockC}></img>
        </div>

        <div className='prk_img_popup' id='div31'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockD}></img>
        </div>

        <div className='prk_img_popup' id='div32'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockE}></img>
        </div>

        <div className='prk_img_popup' id='div33'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockF}></img>
        </div>

        <div className='prk_img_popup' id='div34'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockG}></img>
        </div>

        <div className='prk_img_popup' id='div35'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockH}></img>
        </div>

        <div className='prk_img_popup' id='div36'>
            <a className='prk_img_popup_close'>
                <img src={cancel}></img>
            </a>
            <img className='elsc_park_map_img ' src={popUpBlockJ}></img>
        </div>

      <div className='prk_img_popup_overlay'></div>



    </>
  )
}
