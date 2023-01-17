import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React from "react";

const Register = () => {
  return (
    <main>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg={4}>
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <span className="d-none d-lg-block">Admin Panel</span>
                </a>
              </div>
              {/* End Logo */}
              <Card className="mb-3">
                <Card.Body className="card-body">
                  <div className="pt-4 pb-2">
                    <Card.Title className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </Card.Title>
                    <p className="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter User Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    <p class="small mb-0">
                      Already have an account?{" "}
                      <a href="pages-login.html">Log in</a>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Register;
