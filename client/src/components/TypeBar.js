import { observer } from 'mobx-react-lite';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer(() => {
    const {device} = React.useContext(Context);
    return (
        <ListGroup>
            <ListGroup.Item>Type 1</ListGroup.Item>
            <ListGroup.Item>Type 1</ListGroup.Item>
            <ListGroup.Item>Type 1</ListGroup.Item>
        </ListGroup>
    )
});

export default TypeBar;
