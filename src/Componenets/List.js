import React from 'react'
import './List.css'
// import { RiArrowDropDownLine } from 'react-icons/ri'
import {MdLocalOffer} from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function List() {
  return (
    <>
      <div className='main'>
        <div className='sidebar'>
          <button className='btn'>
            SHOP BY CATEGORY
            <RiArrowDropDownLine className='icon' />
          </button>
        </div>
        <div className='container'>
          <MdLocalOffer className='icon_1'/>
          <span>OFFERS</span>
        </div>
      </div>
    </>
  )
}

export default List