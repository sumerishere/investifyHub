import { Button, Input } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import  './nav.css'
import {Link, Routes,Route} from 'react-router-dom';
import Startup from '../StartUp/Startup';

function Nav() {
    const[id,setid] = useState();
    const inpvalue = useRef('');
    async function fun(){
        let val = inpvalue.current.input.defaultValue;
        val=val.toUpperCase();
        const dt = await fetch(`http://localhost:8080/getbyName?cname=${val}`);
        const jdata=await dt.json();
        // console.log('the data',jdata[0].id);
        setid(jdata[0].id);
    }

  return (
    <div className='nav'>
        <div className="navcontent">
            <div className="left">
            <div className="logo"><img src="" alt="logo" className='log' /></div>
        <div className="input">
            <Input placeholder='Explore Investments'  ref={inpvalue} />
            <Button onClick={fun}><SearchOutlined /></Button>
        </div>
            </div>
            <div className="right">
                <div className="rcont">
                    <ul>
                        <li><Link to='/StartUpData' style={{ textDecoration: 'none' }}>Start Investing</Link></li>
                        <li><Link style={{ textDecoration: 'none' }}>Log In</Link></li>
                        <li><Link style={{ textDecoration: 'none' }}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <Routes>
        <Route path={`/post/:${id}`} element={<Startup/>}/>
        </Routes>
    </div>
  )
}

export default Nav