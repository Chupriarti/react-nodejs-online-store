import React from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = React.useContext(Context);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [type, setType] = React.useState(null);
    const [brand, setBrand] = React.useState(null);
    const [file, setFile] = React.useState(null);
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

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
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
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                        onChange={selectFile}
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
                            <Col md={4}>
                                <Button
                                    variant={"outline-danger"}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Delete
                                </Button>
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