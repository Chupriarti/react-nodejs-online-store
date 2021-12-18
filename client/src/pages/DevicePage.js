import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png';

const DevicePage = () => {
    const device = {
        id: 1, 
        name: "iPhone 11", 
        price: 10000,
        rating: 2,
        img: "https://img.youtube.com/vi/-N1MQmJNGJU/maxresdefault.jpg"
    };

    const description = [
        {id: 1, title: "Memory", description: "4 gb"},
        {id: 2, title: "Camera", description: "16mp"},
        {id: 3, title: "CPU", description: "ARM"},
        {id: 4, title: "Cores", description: "4"},
        {id: 5, title: "Battery", description: "5000mah"}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${star}) no-repeat center center`, 
                                width: 240, 
                                height: 240, 
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            width: 300, 
                            height: 300, 
                            fontSize: 32,
                            border: "5px solid lightgray"
                        }}
                    >
                        <h3>From: {device.price} rub</h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specifications</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;
