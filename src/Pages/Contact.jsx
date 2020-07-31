import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value,

            }
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`
            Name:${data.name}
            Phone:${data.phone}
            Email:${data.email}
            Massage:${data.msg}
        
        `);
    };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-4">
            <Form onSubmit={formSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" value={data.name} onChange={InputEvent} type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your Phone Number"
                  name="phone" 
                  value={data.phone} 
                  onChange={InputEvent}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" value={data.email} onChange={InputEvent} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Massage</Form.Label>
                <Form.Control name="msg" value={data.msg} onChange={InputEvent} as="textarea" rows="3" />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
