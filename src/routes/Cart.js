import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName,changeAge } from "./../store/Slice.js";
import {upCount} from "./../store.js"
function Cart(){
    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    return(
        <div>

            {state.user.name}{state.user.age}의 장바구니
            <button onClick={()=>{
                dispatch(changeAge(100))
            }}>버튼</button>
            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    
    
    {
        state.cart.map(function(a,i){
          return (
                <tr key={i}>
                    <td>{a.id}</td>
                    <td>{a.title}</td>
                    <td>{a.count}</td>
                    <td><button onClick={()=>{
                        dispatch(upCount(a.id))
                    }}>+</button></td>
                </tr>
          )
        })
    }
  </tbody>
</Table> 
        </div>
    )
}

export default Cart;