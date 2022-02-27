import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { signUpAPI } from '../../client/user';

function LoginForm(){

    function signUp(event) {
        event.preventDefault();
        const target = event.target;
        const signUpParams = {
            email: target.formEmail.value,
            firstName: target.formFirstName.value,
            lastName: target.formLastName.value,
            password: target.formPassword.value,
            phone: target.formPhone.value,
            address: target.formAddress.value,
        };
        signUpAPI(signUpParams).then(()=>{});
    }

    return (
        <Form className='mx-auto' style={{width:400}} onSubmit={signUp}>
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
            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control style={{width:'100%'}} type="password" placeholder="Enter password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm password*</Form.Label>
                <Form.Control style={{width:'100%'}} type="password" placeholder="Enter password again" required />
            </Form.Group>
            <div className='col text-center'>
                <Button className="mx-3 mb-3" variant="primary" type="submit">
                    Submit
                </Button>
                <Button className="mx-3 mb-3" variant="secondary">
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
