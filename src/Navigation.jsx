import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <>
            <div className='container'>
           <Navbar bg='info' expand="lg" >
           <Navbar.Toggle aria-controls='basic-navbar-nab'/>
           <Navbar.Collapse id='basic-navbar-nav'>
               <Nav>
                   <NavLink className='d-inline p-2 text-white' to="/">
                       Home
                       </NavLink>
                       <NavLink className='d-inline p-2 text-white' to="/department">
                           Department
                           </NavLink>

                           <NavLink className='d-inline p-2 text-white' to="/employee">
                               Employee
                               </NavLink>
                   </Nav>               
               </Navbar.Collapse>   
           </Navbar>
           </div>
           </>
        )
     }
}