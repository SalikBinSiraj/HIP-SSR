import React from 'react'
import '../../../../assets/css/solution_inside.css';

import tool from '../../../../assets/img/solutions_inside/park_const/svg/tool.svg'
import contsIcon from '../../../../assets/img/solutions_inside/park_const/svg/conts-icon.svg'
import globalIcon from '../../../../assets/img/solutions_inside/park_const/svg/global-icon.svg'
import enviroIcon from '../../../../assets/img/solutions_inside/park_const/svg/enviro-icon.svg'
import readyIcon from '../../../../assets/img/solutions_inside/park_const/svg/ready-icon.svg'
import btsIcon from '../../../../assets/img/solutions_inside/park_const/svg/bts-icon.svg'

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
                          <img alt='Built-to-Suit' src={btsIcon}></img>
                          <h3 className=''>Built-to-Suit</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Ready-to-move' src={readyIcon}></img>
                          <h3 className=''>Ready-to-move</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Environment-friendly construction' src={enviroIcon}></img>
                          <h3 className=''>Environment-friendly construction</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Global design and expertise' src={globalIcon}></img>
                          <h3 className=''>Global design and expertise</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Real-time construction updates' src={contsIcon}></img>
                          <h3 className=''>Real-time construction updates</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Maximizing Value Engineering' src={tool}></img>
                          <h3 className=''>Maximizing Value Engineering</h3>
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
