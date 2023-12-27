import React from 'react'
import '../../../../assets/css/solution_inside.css';

import gover from '../../../../assets/img/solutions_inside/Strategic_land/svg/gover-prtner-icon.svg'
import connect from '../../../../assets/img/solutions_inside/Strategic_land/svg/connect-icon.svg'
import partnership from '../../../../assets/img/solutions_inside/Strategic_land/svg/partnership-icon.svg'
import strategic from '../../../../assets/img/solutions_inside/Strategic_land/svg/strategic-icon.svg'
import proactive from '../../../../assets/img/solutions_inside/Strategic_land/svg/proactive-icon.svg'
import panindia from '../../../../assets/img/solutions_inside/Strategic_land/svg/panindia-icon.svg'

export default function Solution_inside_sec2() {
  return (
    <>
      <div className='sol_inside_sec2 mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>

            <div className='row'>
                <div className='col-12 sol_icon_col'>
                   <div className='row'>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Pan India Presence' src={panindia}></img>
                          <h3 className=''>Pan India Presence</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Proactive expansion' src={proactive}></img>
                          <h3 className=''>Proactive expansion</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Strategic locations' src={strategic}></img>
                          <h3 className=''>Strategic locations</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Brownfield & Greenfield assets, JV Partnerships' src={partnership}></img>
                          <h3 className=''>Brownfield & Greenfield assets, JV Partnerships</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Connectivity to consumption centres and major highways' src={connect}></img>
                          <h3 className=''>Connectivity to consumption centres and major highways</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Local community partnerships and government support' src={gover}></img>
                          <h3 className=''>Local community partnerships and government support</h3>
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
