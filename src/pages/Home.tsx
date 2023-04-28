import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import Service from '../services/service';
import {useDispatch} from 'react-redux';
import { addAuth, consultaGetUsers } from '../redux/slices/authSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import Config from '../../ConfigEnv';

const Home = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    //const [usuarios, setUsuarios] = useState([])
    const {users} = useSelector((state:any)=>state.auth);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    
    const metodo = ()=>{
      const numero:number = Service.metodoNumero("");
      setNumber(numero);
    }
  
    const metodoGet = async ()=>{
    //   const usuTemp:[] = await Service.consultaGet();
    //   setUsuarios(usuTemp);
        dispatch(consultaGetUsers());
    }
  
    useEffect(() => {
      metodo();
      metodoGet();
      dispatch(addAuth({token:'token', name:'ervin'}));
    }, [])
    
    useEffect(() => {
        //console.log(users)
      }, [users])

    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            
          </a>
          <a href="https://reactjs.org" target="_blank">
            
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p>{import.meta.env.VITE_URL_API}</p>
        <p>{Config.urlAPI}</p>
        <p>Número: {number}</p>
        <p>Cantidad Usuario: {users.length}</p>
      </div>
    )
}

export default Home

