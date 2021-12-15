import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Auth = () => {
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                Auth
            </Card>
        </Container>
    )
}

export default Auth;
