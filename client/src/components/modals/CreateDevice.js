import React from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = React.useContext(Context);

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
                    <Dropdown>
                        <Dropdown.Toggle>Select type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>     
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder={"Enter device name"}
                    />
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