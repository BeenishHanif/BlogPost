import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="google" />
          </a>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-muted">
            <MDBIcon color="muted" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 me-4">BLOGS</h6>
              <p className="text-muted">
                In the constant drumbeat of life, BlogPulse.com is your
                sanctuary, where the heartbeats of creativity synchronize with
                the rhythm of your thoughts.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-muted">
                  Overview
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Plans
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Promotions
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted" style={{ color: "#fff" }}>
                  Programs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-muted">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted" color="dark">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="text-muted">
                <MDBIcon color="muted" icon="home" className="me-4" />
                Pakistan , Karachi, 7500
              </p>
              <p className="text-muted">
                <MDBIcon color="muted" icon="envelope" className="me-4" />
                info@blogs.com
              </p>
              <p className="text-muted">
                <MDBIcon color="muted" icon="phone" className="me-3" /> + 92 000
                000 111
              </p>
              <p className="text-muted">
                <MDBIcon color="muted" icon="print" className="me-3" /> + 92 000
                000 111
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-muted fw-bold" href="/posts">
          Blogs.com
        </a>
      </div>
    </MDBFooter>
  );
}
