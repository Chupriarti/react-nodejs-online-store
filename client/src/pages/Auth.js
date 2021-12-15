import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/constansts';

const Auth = () => {
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Login</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder='Enter email...'
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder='Enter password...'
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            No account? <NavLink to={REGISTRATION_ROUTE}>Registrate</NavLink>
                        </div>
                        <Button 
                            variant={"outline-success"}
                        >
                            Enter
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;
