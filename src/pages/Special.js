import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import orchids from "../data/ListOfOrchids";

const Special = () => {
  return (
    <Container className="mt-4">
      <h2>Hoa Lan Đặc Biệt</h2>
      <Row>
        {orchids.map((orchid) => (
          <Col md={4} key={orchid.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={orchid.image} />
              <Card.Body>
                <Card.Title>{orchid.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Special;