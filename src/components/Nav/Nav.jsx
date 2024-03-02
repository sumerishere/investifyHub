import { Button, Input } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import {SearchOutlined} from '@ant-design/icons'
import  './nav.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Startup from '../StartUp/Startup';

function Nav() {
    const[id,setId] = useState(null);
    const inpvalue = useRef('');
    const history = useNavigate()


    async function fun(){
        let val = inpvalue.current.input.defaultValue;
        val=val.toUpperCase();
        const dt = await fetch(`http://localhost:8080/getbyName?cname=${val}`);
        const data=await dt.json();
        if (data.length > 0) {
            console.log(data[0]);
            setId(data[0].id);
            history(`/post/${data[0].id}`);
        } else {
            setId(null);
        }
    }

  return (
    <div className='nav'>
        <div className="navcontent">
            <div className="left">
            <div className="logo">
            <p className="title-p">investifyHub📈</p>
            <p className="sub-text">elevate your investments</p>
          </div>
        <div className="input">
            <Input placeholder='Explore Investments'  ref={inpvalue} />
            <Button onClick={fun}><SearchOutlined /></Button>
        </div>
            </div>
            <div className="right">
                <div className="rcont">
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none',color:'black' }}>Home</Link></li>
                        <li className='btn1'><Link to='/StartUpData'  style={{ textDecoration: 'none',color:'black' }}>Start Investing</Link></li>
                        <li><Link to='Login' style={{ textDecoration: 'none',color:'black' }}>Log In</Link></li>
                        <li><Link to='InvestorSignUp' style={{ textDecoration: 'none',color:'black' }}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {id && <Startup id={id}/>}
    </div>
  )
}

export default Nav