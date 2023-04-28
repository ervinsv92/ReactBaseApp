import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { changeName } from '../redux/slices/authSlice';

const ScreenDetail = () => {
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(changeName('cambiado'));
    }, [])
    
  return (
    <div>ScreenDetail: {id}</div>
  )
}

export default ScreenDetail