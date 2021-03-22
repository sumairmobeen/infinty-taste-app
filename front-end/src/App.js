import React from "react";
// import {
//   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
// } from "mdbreact";
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/adminDashboard";
import LogoutButton from './components/logoutButton';
import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';
import { useGlobalState } from './context/globalContext'
import AddProduct from './components/AddProduct';
import Checkout from './components/Checkoutform';
import Basket from './components/Basket';
import Myorders from './components/Myorders';
import AdminHistory from './components/AdminHistory'



function App() {
  const globalState = useGlobalState();

  return (
    <>
      <nav className="sticky-top">
        <Navbar bg="dark" variant="dark" >
          {(globalState.role === 'admin') ?
            <>
              <Nav className="mr-auto">
                <Nav.Link><Link to="/">Admin Dashboard</Link></Nav.Link>

                <Nav.Link><Link to="/addproducts">Add Product</Link></Nav.Link>
                <Nav.Link><Link to="/orderhistory">Order History</Link></Nav.Link>
              </Nav>
              <LogoutButton />
            </> : null
          }

          {(globalState.role === 'user') ?
            <>
              <Nav className="mr-auto">
                <Nav.Link><Link to="/">user Dashboard</Link></Nav.Link>

                <Nav.Link><Link to="/myorders">MY Order</Link></Nav.Link>
              </Nav>
              <LogoutButton />
            </> : null
          }
          {(globalState.role === 'loggedout') ?
            <>
              <Nav className="mr-auto">
                <Nav.Link><Link to="/signup">Signup</Link></Nav.Link>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
              </Nav>
            </> : null
          }
        </Navbar>
      </nav>

      {/* ROLE NULL////////////////////////////////////// */}

      {(globalState.role === null) ?
        <Switch>
          <Route path="*" ><h1>LOADING......</h1></Route>
        </Switch>
        : null
      }

      {/* ROLE LOGGEDOUT////////////////////////////////////// */}

      {(globalState.role === "loggedout") ?
        <Switch>
          <Route exact path="/"><Home /></Route>

          <Route path="/signup"><Signup /></Route>

          <Route path="/login"><Login /></Route>

          <Route path="*" ><Redirect to="/" /></Route>

        </Switch>

        : null
      }



      {/* ROLE USER ////////////////////////////////////// */}
      {(globalState.role === "user") ?
        <Switch>
          <Route exact path="/"><Dashboard /></Route>

          <Route path="/basket"><Basket /></Route>

          <Route path="/Checkout"><Checkout /></Route>

          <Route path="/myorders"><Myorders /></Route>

          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
        : null
      }

      {/* ROLE ADMIN ////////////////////////////////////// */}
      {
        (globalState.role === "admin") ?
          <Switch>

            <Route exact path="/"><AdminDashboard /></Route>

            <Route path="/addproducts"><AddProduct /></Route>
            <Route path="/orderhistory"><AdminHistory /></Route>


            <Route path="*" ><Redirect to="/" /></Route>

            {/* <Route path="*" ><h1>404! Page Not Found</h1></Route> */}

          </Switch>
          : null
      }

      {/* ADMIN ROUTES REGISTERED/////////////////////////////////////////// */}
      {/* {a === "admin" ?
        <Switch>
          <Route exact path="/" ><h2>ADMIn found successfully</h2></Route>
          <Route exact path="/abc" ><h2>ADMIn found abc</h2></Route>
          <Route path="*" ><h2>ADMIN not found</h2></Route>
        </Switch>
        : null
      } */}

      {/* USER ROUTES REGISTERED/////////////////////////////////////////// */}

      {/* {a === "user" ?
        <Switch>
          <Route exact path="/" ><h2>USER found successfully</h2></Route>
          <Route exact path="/abc" ><h2>USER found abc</h2></Route>
          <Route path="*" ><h2>USER not found</h2></Route>
        </Switch>
        : null
      } */}

    </>
  )
}

export default App;
