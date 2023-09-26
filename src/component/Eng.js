import React, { useContext } from 'react'

import './eng.css'
// import { maindata } from '../App'

export default function Eng() {
    // const data = useContext(maindata)

    // const handlang = (val) => {
    //     data[1](val)
    // }


    return (

        <div className='main'>
          <div className='first' >
                    <nav className="navbar">
                        <ul>
                            <li>Home</li>
                            <li>AboutMe</li>
                            <li>Contact</li>
                        </ul>
                       
                    </nav>
                    
                    <div className="details">
                        <div className="dts">
                            <h1>Paavan Trivedi</h1>
                            <p>I'm a React Js Developer. Currently I'm working at <br /> Tuvoc  Technologies Pvt. Ltd. My Hobbies are <br /> Photography and I'm also a Guitarist.</p>
                           
                        </div>
                      <img src="_GOP2053.jpg" alt="" className="pic" />
                    </div>
                </div>
          {/* <select className='sel'  onClick={(e) => handlang(e.target.value)}>
                <option value="english" >English</option>
                <option value="ગુજરાતી">ગુજરાતી</option>
                <option value="हिंदी">हिंदी</option>
            </select>
         */}
            {/* {data[0] == "english" ? (
                )
               : data[0] == "ગુજરાતી" ? (<LangContext/>) : (<Hindi/>)} */}


        </div>
    )
}
