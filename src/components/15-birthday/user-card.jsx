import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
const UserCard = (props) => {
    const { image, name, age } = props;
    return (
        <Card className="my-4">
            <Card.Body>
                <Row>
                    <Col xs={3}>
                        <Image
                            src={`img/${image}`}
                            roundedCircle
                            className="img-fluid"
                        />
                    </Col>
                    <Col
                        xs={9}
                        className="d-flex flex-column justify-content-center "
                    >
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>
                            <FaBirthdayCake /> {age}
                        </Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
export default UserCard;