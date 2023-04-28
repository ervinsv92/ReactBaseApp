import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import authService from '../../services/service';

interface initialStateInterface {
    token:string,
    name:string,
    users:any[]
}

const initialState:initialStateInterface = {
    token:"",
    name:"",
    users:[]
}

export const consultaGetUsers = createAsyncThunk(
    'auth/consultaGetUsers',
    async (thunkAPI)=>{
        return await authService.consultaGet();
    });

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addAuth: (state, action)=>{
            const {token, name} = action.payload;
            state.token = token;
            state.name = name;
        },
        changeName: (state, action)=>{
            const name = action.payload;
            state.name = name;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(consultaGetUsers.fulfilled,(state,action)=>{
            state.users = action.payload
        })
    }
});

export const {addAuth,changeName} = authSlice.actions;
export default authSlice.reducer;

