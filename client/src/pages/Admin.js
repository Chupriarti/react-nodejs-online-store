import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
            >
                Create type
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
            >
                Create brand
            </Button>
            <Button 
                variant={"outline-dark"} 
                className="mt-4 p-2"
            >
                Create device
            </Button>
        </Container>
    )
}

export default Admin;
