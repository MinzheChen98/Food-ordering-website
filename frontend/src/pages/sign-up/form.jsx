import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginForm(){
    const [form, setForm] = useState({});

    function signUp() {
        console.log(form);
    }

    return (
        <Form className='mx-auto' style={{width:400}}>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control style={{width:'100%'}} type="password" placeholder="Password" required />
            </Form.Group>
            <div className='col text-center'>
                <Button className="mx-3" variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary">
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
