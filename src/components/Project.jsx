import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const styles = {
  card: {
   width: '30rem',
   height: '15rem',
  },
}

export default function Project({ data }) {
  return (
    <div style={styles.card}>
      <Col key={data.id} >
        <Card>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
