import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../Auctions/user.auctions';

function Login() {
  const [inputs, setInputs] = useState({
      username: '',
      password: ''
    });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => { 
      dispatch(userActions.logout()); 
    }, []);

  function handleChange(e) {
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
      e.preventDefault();

      setSubmitted(true);
      if (username && password) {
          // get return url from location state or default to home page
          const { from } = location.state || { from: { pathname: "/" } };
          dispatch(userActions.login(username, password, from));
      }
  }
  return(
      <>
        <Container>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name = "username" value={username} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name = "password"  value={password} onChange={handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </Button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
      </>
    );
      
}
export default  Login ;
