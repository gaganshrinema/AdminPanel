import React from "react";
import {
  Card,
  Row,
  Col,
  Breadcrumb,
  Table,
  Button,
  Carousel,
} from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import Barchart from "../../component/Chart/Barchart";
import Linechart from "../../component/Chart/Linechart.jsx";
import "./style.css";

function DashBoard() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <section className="section dashboard">
          <Row>
            <Col xl={9}>
              <Row>
                <Col xl={4} md={6}>
                  <Card className="info-card">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        Info <span>| Today</span>
                      </Card.Title>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-info-circle" />
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                          <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={6}>
                  <Card className="info-card incress-card">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        Incress <span>| This Month</span>
                      </Card.Title>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-bar-chart-steps" />
                        </div>
                        <div className="ps-3">
                          <h6>3,264</h6>
                          <span className="text-success small pt-1 fw-bold">
                            8%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} md={6}>
                  <Card className="info-card decress-card">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        decress <span>| This Year</span>
                      </Card.Title>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-arrow-bar-down" />
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Line Chart</Card.Title>
                      <Linechart />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Bar Chart</Card.Title>
                      <Barchart />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl={12}>
                  <Card className="Product overflow-auto">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        Production <span>| Today</span>
                      </Card.Title>
                      <Table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="#">01</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="#" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">02</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">03</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="#" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">04</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="#" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">05</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="#" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="Product overflow-auto">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        Production <span>| Month</span>
                      </Card.Title>
                      <Table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="#">01</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="#" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">02</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">03</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="#" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xl={3}>
              <Card>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/img/news-1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/img/news-2.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="assets/img/news-5.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Card.Body>
                  <Card.Title className="card-title">
                    News &amp; Updates <span>| Today</span>
                  </Card.Title>
                  <div className="news">
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-1.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-2.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-4.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-1.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-2.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                    <div className="post-item clearfix">
                      <Card.Img variant="top" src="assets/img/news-4.jpg" />
                      <h4>
                        <a href="#">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </a>
                      </h4>
                      <p>Sit recusandae non aspernatur laboriosam...</p>
                    </div>
                  </div>
                  <Button variant="primary" className="mt-3">
                    Read More...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}

export default DashBoard;
