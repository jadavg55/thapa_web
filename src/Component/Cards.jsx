import React from "react";
import { Card, Button } from "react-bootstrap";


const Cards = (props) => {
  return (
    <>

              <div className="col-md-4 col-10 mx-auto">
                <Card>
                  <Card.Img variant="top" src={props.imgsrc} />
                  <Card.Body>
                    <Card.Title>{props.title} </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button href="/home" variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
        
    </>
  );
};

export default Cards;
