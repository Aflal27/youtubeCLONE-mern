import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        userdata:null
    },
    reducers:{
        userdataSuccess(state,action){
            return{
                userdata:action.payload
            }
        },
        logout(state,action){
            return{
                userdata:null
            }
        }
    }
})
const {reducer,actions} = userSlice
export const {userdataSuccess,logout} = actions
export default reducer