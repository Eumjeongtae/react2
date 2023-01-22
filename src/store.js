import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/Slice.js'




let cart = createSlice({
    name :'cart',
    initialState : [
        {id : 0, title : 'White and Black', count : 2},
        {id : 1, title : 'Grey Yordan', count : 1}
      ] ,
      reducers : {
          upCount(state,action){
            let x = state.findIndex((a)=>{return a.id ==action.payload})
            console.log(action.payload);
            console.log(x);
            state[x].count++
          },
          add(state,action){
            state.push(action.payload)
          }
          
      }
})
export let {upCount,add} = cart.actions

export default configureStore({
  reducer: {
    cart : cart.reducer,
    user : user.reducer

   }
}) 