import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addData } from '../../redux/slice/startUpDataSlice';
import StartUpComp from './StartUpComp';

function StartUpData() {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        async function fun(){
            const data = await fetch('http://localhost:8080/get-all');
            const jsondata = await data.json();
            jsondata.forEach(element => {
                dispatch(addData(element));
            });
        }
        fun();
    },[])

  return (
    <div>
        <StartUpComp/>
    </div>
  )
}

export default StartUpData