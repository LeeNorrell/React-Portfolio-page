import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const styles = {
 projectCard: {
  display: 'flex',
  alignItems: 'center',
  padding: '20px'
 },
 colCard: {
  padding:'10px'
 },
 titleText: {
  display: 'flex',
  justifyContent: 'center',
 },
 bodyStyle: {
  backgroundImage: 'linear-gradient(to bottom right,#2c4053, rgb(38, 83, 121)' 
 },
 border: {
  border: '2px black'
 }
}

export default function Project({ data }) {
  return (
    <Row style={styles.projectCard}>
      <Col key={data.id} >
        <Card style={styles.border}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body style={styles.bodyStyle}>
            <Card.Title style={styles.titleText}>{data.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
   
  );
}
