import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/constansts';

const NavBar = observer (() => {
    const {user} = React.useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Buy Device! - Shop</NavLink>
            {user.isAuth ? 
                <Nav className="ms-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"}>Admin Panel</Button>
                    <Button variant={"outline-light"}>Logout</Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Login</Button>
                </Nav>            
            }
        </Navbar>
    )
});

export default NavBar;
