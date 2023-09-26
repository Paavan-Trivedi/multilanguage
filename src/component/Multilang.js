import React, { useContext } from 'react'
import Eng from './Eng'
import Guj from './Guj'
import Hindi from './Hindi'
import { maindata } from '../App'

export default function Multilang() {
    const data = useContext(maindata)

    const handlang = (val) => {
        data[1](val)
    }

  return (
   <>
   <div className="main">
   <select className='sel'  onClick={(e) => handlang(e.target.value)}>
        <option value="english" >English</option>
        <option value="ગુજરાતી">ગુજરાતી</option>
        <option value="हिंदी">हिंदी</option>
    </select>
    {data[0] == "english" ? (<Eng/>)  : data[0] == "ગુજરાતી" ? (<Guj/>) : (<Hindi/>)}

   </div>
   </>
  )
}
