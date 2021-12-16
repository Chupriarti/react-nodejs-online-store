import { observer } from 'mobx-react-lite';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = React.useContext(Context);
    return (
        <Row className="d-flex">
            <Card>Brand 1</Card>
            <Card>Brand 2</Card>
            <Card>Brand 3</Card>
        </Row>
    )
});

export default BrandBar;
