import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/constansts';

const NavBar = observer (() => {
    const {user} = React.useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Buy Device! - Shop</NavLink>
                {user.isAuth ? 
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"}>Admin Panel</Button>
                        <Button variant={"outline-light"} className="ms-2">Logout</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>        
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;
