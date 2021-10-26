import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import AuthService from '../Services/AuthService';



export default class Login extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        username: "",
        password: "",
      };
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  
    handleLogin(e) {
      e.preventDefault();
  
        AuthService.login(this.state.username, this.state.password).then(
            () => {
                console.log('AfterService')
            });
    }

    render() {
        return(
            <>
                <Container>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form onSubmit={this.handleLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"  value={this.state.username} onChange={this.onChangeUsername} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"  value={this.state.password} onChange={this.onChangePassword}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
    );
    }
}
