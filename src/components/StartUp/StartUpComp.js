import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './startCom.css'
import Startup from './Startup';
import startUpDataSlice, { addData, selectAllData } from '../../redux/slice/startUpDataSlice';
function StartUpComp() {
    // const [data,setData] = useState([]);
    // // const dispatch = useDispatch();
    // useEffect(()=>{
    //     async function fun(){
    //         const dt = await fetch('http://localhost:8080/get-all');
    //         const jsondt = await dt.json();
    //         setData(jsondt);
    //         // dispatch(addData(jsondt))
    //     }
    //     fun();
    // },[])
// console.log(data);
const data = useSelector(selectAllData);
console.log(data);
  return (
    <div className='cont'>
        <div className="cont1">
        {
            data.map((data)=>{
                return (
                    <div className="comp" key={data.id}>
                        <div className="divimg">
                            <Link to={`/post/${data.id}`} style={{ textDecoration: 'none' }}>
                            <div className="img1">
                            <img className='img' src={`data:image/jpeg;base64,${data.companyImage}`} alt="image" />
                            </div>
                            <div className="nm">
                                <h6>{`${data.companyName}`}</h6>
                                <p>{`${data.title}`}</p>
                            </div>
                            <br />
                            <div className="term">
                                <div className="r">
                                    <h6>${`${data.raised}`}</h6>
                                    <p>raised</p>
                                </div>
                                <div className="r">
                                    <h6 style={{paddingLeft:'10px'}}>{`${data.investor}`}</h6>
                                    <p style={{paddingLeft:'10px'}}>investors</p>
                                </div>
                                <div className="r">
                                    <h6>${`${data.mininvest}`}</h6>
                                    <p>Min.investment</p>
                                </div>
                            </div>
                            <br />
                            </Link>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default StartUpComp