import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React from "react";

const Login = () => {
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
                      Login to Your Account
                    </Card.Title>
                    <Card.Text className="text-center small">
                      Enter your username &amp; password to login
                    </Card.Text>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className="w-100" type="submit">
                      Submit
                    </Button>

                    <p className="small mb-0">
                      Don't have account? <a href="/">Create an account</a>
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

export default Login;
