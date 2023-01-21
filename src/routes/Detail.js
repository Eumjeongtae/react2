import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import {Nav} from 'react-bootstrap'

import styled from "styled-components";
function Detail(props){
  let {id} = useParams();
  let [num, setNum] = useState('')
  let [탭,탭변경] = useState(0)
  let [up, setUp] = useState('')
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });


  useEffect(()=>{
    setTimeout(()=>{ setUp('uprise') }, 100)
  return ()=>{
    setUp('')
  }
  }, [])
 
    return(
        <div className={"container start "+up} >
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>

  <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
    </Nav.Item>
</Nav>
<TabContent 탭={탭}/>
</div> 
    )
}
function TabContent({탭}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}


export default Detail;