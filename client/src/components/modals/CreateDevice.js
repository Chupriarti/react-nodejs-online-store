import React from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = React.useContext(Context);
    const [info, setInfo] = React.useState([]);

    const addInfo = () => {
        setInfo(
            [...info, 
                {
                    title: '',
                    description: '',
                    number: Date.now()
                }
            ]
        )
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Dropdown className="mt-3">
                        <Dropdown.Toggle>Select type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>     
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Select brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => 
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>     
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Enter device name"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Enter device price"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new specification
                    </Button>
                    {info.map(i => 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Enter specification title"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Enter specification value"}
                                />
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice;