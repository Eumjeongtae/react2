
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Route,Routes,Link , useNavigate, Outlet } from 'react-router-dom'; 
import Detail from './routes/Detail';
import Cart from './routes/Cart'
import Event from './routes/Event';
import axios from 'axios';
function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  let [num,setNum] = useState(2);
  return (
    <div className="App">
     
      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand  onClick={()=>{navigate('/')}}>Shoeshop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className="container">
                <Modal shoes={shoes}/>
        </div> 
        <button onClick={()=>{
          axios.get(`https://codingapple1.github.io/shop/data${num}.json`)
          .then((result)=>{
            let more =[...shoes]
            more.push(...result.data);
            setShoes(more)
            
          })
          setNum(num+1)
          if(num > 3){
            alert('더이상 없어요')
          }
        }}>버튼</button>
        </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />}/>
        <Route path='/cart' element={<Cart />}/>
        {/* <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>위치정보</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰</div>}/>
        </Route> */}
        </Routes>

      

    </div>
  );
}
function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Modal(props){
  return(
    <div className="row">
      {
        props.shoes.map(function(a,i){
          return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%"/>
      <h4>{props.shoes[i].title}</h4>
      <p>{props.shoes[i].content}</p>
      <p>{props.shoes[i].price}</p>
    </div>
          )
        })
    }
 
    
  </div>
  )
}

export default App;
