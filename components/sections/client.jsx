import React from 'react'
import '../../assets/css/client.css'
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import $ from "jquery";

import Frame1 from '../../assets/img/svg/Auto/SVG/Frame 1Auto.svg'
import Frame2 from '../../assets/img/svg/Auto/SVG/Frame 2Auto.svg'
import Frame3 from '../../assets/img/svg/Auto/SVG/Frame 3Auto.svg'
import Frame4 from '../../assets/img/svg/Auto/SVG/Frame 4Auto.svg'
import Frame6 from '../../assets/img/svg/Auto/SVG/Frame 6Auto.svg'
import Frame7 from '../../assets/img/svg/Auto/SVG/Frame 7Auto.svg'

import firstcry from '../../assets/img/svg/Ecommerce/SVG/firstcry.svg'
import decathlon from '../../assets/img/svg/Ecommerce/SVG/decathlon.svg'
import dealshare from '../../assets/img/svg/Ecommerce/SVG/dealshare.svg'
import blinkit from '../../assets/img/svg/Ecommerce/SVG/blinkit.svg'
import amazon from '../../assets/img/svg/Ecommerce/SVG/amazon.svg'

import Frame2Engineer from '../../assets/img/svg/Engineering/SVG/Frame 2Engineering.svg'
import Frame3Engineer from'../../assets/img/svg/Engineering/SVG/Frame 3Engineering.svg'
import Frame4Engineer from '../../assets/img/svg/Engineering/SVG/Frame 4Engineering.svg'
import Frame6Engineer from '../../assets/img/svg/Engineering/SVG/Frame 6Engineering.svg'

import RelianceRetail from '../../assets/img/svg/Ecommerce/SVG/reliance retail.svg'
import Myntra from '../../assets/img/svg/Ecommerce/SVG/myntra.svg'
import Flipkart from '../../assets/img/svg/Ecommerce/SVG/flipkart.svg'

import Frame8Logistics from '../../assets/img/svg/Logistics/SVG/Frame 8Logistics.svg'
import Frame2Logistics from'../../assets/img/svg/Logistics/SVG/Frame 2Logistics.svg'
import Frame9Logistics from'../../assets/img/svg/Logistics/SVG/Frame 9Logistics.svg'
import Frame4Logistics from'../../assets/img/svg/Logistics/SVG/Frame 4Logistics.svg'
import Frame11Logistics from'../../assets/img/svg/Logistics/SVG/Frame 11Logistics.svg'
import Frame10Logistics from'../../assets/img/svg/Logistics/SVG/Frame 10Logistics.svg'

import SafeExpress from '../../assets/img/svg/Logistics/SVG/safe_express.svg'
import Acci from '../../assets/img/svg/Logistics/SVG/acci.svg'
import EcomExpress from '../../assets/img/svg/Logistics/SVG/ecom_express.svg'

import Frame2OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 2Oil&Energy.svg'
import Frame3OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 3Oil&Energy.svg'
import Frame4OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 4Oil&Energy.svg'
import Frame9OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 9Oil&Energy.svg'
import Frame6OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 6Oil&Energy.svg'
import Frame5OilEnergy from '../../assets/img/svg/Oil&Energy/SVG/Frame 5Oil&Energy.svg'

import lubrikote from '../../assets/img/svg/Oil&Energy/SVG/lubrikote.svg'
import Frame5Auto from '../../assets/img/svg/Auto/SVG/Frame 5Auto.svg'

import adtyaBirla from '../../assets/img/svg/others/SVG/adtya_birla_group.svg'
import siegenia from '../../assets/img/svg/others/SVG/siegenia.svg'
import Frame4Others from '../../assets/img/svg/others/SVG/Frame 4others.svg'
import Frame2Others from '../../assets/img/svg/others/SVG/Frame 2others.svg'
import thermoFisher from '../../assets/img/svg/others/SVG/thermo_fisher.svg'


export default function Client() {

    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Heading text animation variable
    const clint_big_hd = useRef(null);
    const clint_tab = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#clint_big_hd", {
            y:0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#clint_big_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#clint_tab", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#clint_tab",
                markers: false
            }
        });


        $('#client_dropdown').on('change',function(){
            $('.client_logo_tab').fadeOut('slow');
            // $('.client_logo_tab').addClass('fade');
            $('#' + $(this).val()).fadeIn('slow');
            $('#' + $(this).val()).removeClass('fade');
        });


    }, []);

    return (
        <>
            <div className='client_sec mob_pd_LR snap_sec tab_pd_LR' id='brand_we_serve'>
                <div className='cstm_container'>

                    <div className='row'>
                        <div className='col-12'>
                            {/* <h2 className='big_heading hdg_client'>OUR<br /> CLIENTS</h2> */}
                            <div className="animate_big_txt ">
                                <h2 ref={clint_big_hd} className='big_heading hdg_client' id='clint_big_hd'>Brands</h2>
                            </div>
                            <div className="animate_big_txt ">
                                <h2 ref={clint_big_hd} className='big_heading hdg_client' id='clint_big_hd'>we serve</h2>
                            </div>
                        </div>



                        {/* tab starts here */}

                        <div className="container mt-3 p_opacity" ref={clint_tab} id='clint_tab'>
                            {/* Nav pills  */}

                            <select className='client_mob_drop' id='client_dropdown'>
                                <option value='home'>Auto {'&'} Auto Components</option>
                                <option value='menu1'>E-Commerce</option>
                                <option value='menu2'>Engineering {'&'} Aerospace</option>
                                <option value='menu3'>Logistics</option>
                                <option value='menu4'>Oil, Energy {'&'} Chemicals</option>
                                <option value='menu5'>Others</option>
                            </select>

                            <ul className="nav nav-pills cstm_client_tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active cstm_link" data-bs-toggle="pill" href="#home">Auto {'&'} Auto Components</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu1">E-Commerce</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu2">Engineering {'&'} Aerospace</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu3">Logistics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu4">Oil, Energy {'&'} Chemicals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link clients_link" data-bs-toggle="pill" href="#menu5">Others</a>
                                </li>
                            </ul>



                            {/*  Tab panes  */}
                            <div className="tab-content">

                                <div id="home" className="container tab-pane active fade show client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={Frame1} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame2} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame3} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame4} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame6} ></img></div>
                                    {/* </div>
                                    <div className='img_row_2'> */}
                                        <div className='inside_col'>
                                            {/* <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 5Auto.svg').default} ></img></div> */}
                                            <div className='img_col1'><img className='' src={Frame7} ></img></div>
                                        </div>
                                    </div>
                                </div>

                                <div id="menu1" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={amazon} ></img></div>
                                        <div className='img_col1'><img className='' src={blinkit} ></img></div>
                                        <div className='img_col1'><img className='' src={dealshare} ></img></div>
                                        <div className='img_col1'><img className='' src={decathlon} ></img></div>
                                        <div className='img_col1'><img className='' src={firstcry} ></img></div>
                                    {/* </div>
                                    <div className='img_row_2'> */}
                                    <div className='inside_col'>
                                        <div className='img_col1'><img className='' src={Flipkart} ></img></div>
                                        {/* <div className='img_col1'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/instacart.svg').default} ></img></div> */}
                                        <div className='img_col1'><img className='' src={Myntra} ></img></div>
                                        <div className='img_col1'><img className='' src={RelianceRetail} ></img></div>
                                     </div>
                                    </div>
                                </div>

                                <div id="menu2" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='inside_col'>
                                            <div className='img_col1'><img className='' src={Frame2Engineer} ></img></div>
                                            <div className='img_col1'><img className='' src={Frame3Engineer} ></img></div>
                                            <div className='img_col1'><img className='' src={Frame4Engineer} ></img></div>

                                            <div className='img_col1'><img className='' src={Frame6Engineer} ></img></div>
                                        </div>
                                    </div>

                                </div>
                                <div id="menu3" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={Frame8Logistics} ></img></div>

                                        <div className='img_col1'><img className='' src={Frame2Logistics} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame9Logistics}></img></div>
                                        <div className='img_col1'><img className='' src={Frame4Logistics} ></img></div>

                                        <div className='img_col1'><img className='' src={Frame11Logistics} ></img></div>

                                    {/* </div>
                                    <div className='img_row_2'> */}

                                        <div className='inside_col'>
                                            <div className='img_col2'><img className='' src={EcomExpress} ></img></div>
                                            <div className='img_col2 safe_express'><img className='' src={Frame10Logistics} ></img></div>
                                            <div className='img_col2'><img className='' src={Acci} ></img></div>
                                            <div className='img_col2 safe_express'><img className='' src={SafeExpress} ></img></div>
                                        </div>

                                    </div>
                                </div>

                                <div id="menu4" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={Frame2OilEnergy} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame3OilEnergy} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame4OilEnergy} ></img></div>
                                        <div className='img_col1'><img className='' src={Frame9OilEnergy}></img></div>
                                        <div className='img_col1'><img className='' src={Frame6OilEnergy}></img></div>

                                    {/* </div>
                                    <div className='img_row_2'> */}

                                    <div className='inside_col'>

                                        <div className='img_col1'><img className='' src={Frame5Auto} ></img></div>

                                        <div className='img_col1'><img className='' src={lubrikote} ></img></div>

                                        <div className='img_col2'><img className='' src={Frame5OilEnergy} ></img></div>
                                        </div>

                                    </div>

                                </div>

                                <div id="menu5" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='inside_col'>
                                        <div className='img_col1'><img className='' src={thermoFisher} ></img></div>
                                            <div className='img_col1'><img className='' src={Frame2Others} ></img></div>
                                            <div className='img_col1'><img className='' src={Frame4Others} ></img></div>
                                            <div className='img_col1'><img className='' src={siegenia} ></img></div>
                                            <div className='img_col1'><img className='' src={adtyaBirla} ></img></div>

                                       </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* tabs ends here */}
                    </div>

                </div>
            </div>


        </>
    )
}
