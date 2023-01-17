import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Tab,
  Tabs,
  Breadcrumb,
} from "react-bootstrap";
import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Profile</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">User</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <section className="section profile">
        <Row>
          <Col xl={4}>
            <Card>
              <Card.Body className="profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>Kevin Anderson</h2>
                <h3>Web Designer</h3>
                <div className="social-links mt-2">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={8}>
            <Card>
              <Card.Body className="pt-3">
                <Tabs
                  defaultActiveKey="profile"
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey="home" title="Overview">
                    <div class="profile-overview" id="profile-overview">
                      <Card.Title class="card-title">About</Card.Title>
                      <p class="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <Card.Title class="card-title">
                        Profile Details
                      </Card.Title>

                      <Row>
                        <Col lg={3} md={4} className="label">
                          Full Name
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          Kevin Anderson
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Company
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          Lueilwitz, Wisoky and Leuschke
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Job
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          Web Designer
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Country
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          USA
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Address
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          A108 Adam Street, New York, NY 535022
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Phone
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          (436) 486-3538 x29071
                        </Col>
                        <Col lg={3} md={4} className="label">
                          Email
                        </Col>
                        <Col lg={9} md={8} className="mb-3">
                          k.anderson@example.com
                        </Col>
                      </Row>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Edit Profile">
                    <Form>
                      <Row className="mb-3">
                        <Col md={4} lg={4} className="label">
                          Profile Image
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <img src="assets/img/profile-img.jpg" alt="Profile" />
                          <div className="pt-2">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm"
                              title="Upload new profile image"
                            >
                              <i className="bi bi-upload" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              title="Remove my profile image"
                            >
                              <i className="bi bi-trash" />
                            </a>
                          </div>
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Full Name</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>About</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control type="text" placeholder="Enter About" />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Companys</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Company"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Job</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control type="text" placeholder="Enter Job" />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Country</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Country"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Job</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control type="text" placeholder="Enter Job" />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Address</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Phone</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Phone
"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Email</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Enter Email
"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Job</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control type="text" placeholder="Enter Job" />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Twitter Profile</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Twitter Profile"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Facebook Profile</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Facebook Profile"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Instagram Profile</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Instagram Profile
"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Linkedin Profile</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Linkedin Profile"
                          />
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button variant="primary" type="submit">
                          Save Changes
                        </Button>
                      </div>
                    </Form>
                  </Tab>
                  <Tab eventKey="longer-tab" title="Settings">
                    <Form>
                      <Row>
                        <Col md={4} lg={4} className="label">
                          Email Notifications
                        </Col>
                        <Col md={8} lg={8}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="Changes made to your account"
                            />
                            <Form.Check
                              type="checkbox"
                              label="Information on new products and services"
                            />
                            <Form.Check
                              type="checkbox"
                              label="Marketing and promo offers"
                            />
                            <Form.Check
                              type="checkbox"
                              label="Security alerts"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Tab>
                  <Tab eventKey="contact" title="Change Password">
                    <Form>
                      <Row>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Current Password</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Enter Current Password
"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>New Password</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Enter New Password
"
                          />
                        </Col>
                        <Col md={4} lg={4} className="label">
                          <Form.Label>Re-enter New Password</Form.Label>
                        </Col>
                        <Col md={8} lg={8} className="mb-3">
                          <Form.Control
                            type="password"
                            placeholder="Re-enter New Password
"
                          />
                        </Col>
                        <div className="text-center pt-4">
                          <Button variant="primary" type="submit">
                            Change Password
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Profile;
