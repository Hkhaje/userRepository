import React, { Component } from "react";
import axios_user from "../../HOC/Axios";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import FilterInput from "./FilterInput/FiterInput";
import { Spinner } from "react-bootstrap";
import styles from "./popular.module.css";
import Header from "../Header/Header";

class popular extends Component {
  state = {
    ReposList: [],
    showSpinner: false,
  };
  componentDidMount() {
    this.setState({ showSpinner: true });
    axios_user
      .get(`/users/cds/repos`)
      .then((res) => {
        if (!res.data) return;
        // const data = { ...res.data };
        const data = [...res.data];
        this.setState({ ReposList: data });
        this.setState({ showSpinner: false });
      })
      .catch((er) => {
        console.log(er);
      });
  }
  render() {
    const lst_rep = this.state.ReposList.sort((Va, Vb) => {
      return parseInt(Vb.stargazers_count) - parseInt(Va.stargazers_count);
    }).map((val) => (
      <tr key={val.id}>
        <td>{val.name ? val.name : "Not Register"}</td>
        <td>{val.forks_count}</td>
        <td>{val.stargazers_count}</td>
        <td>{val.updated_at}</td>
      </tr>
    ));
    return (
      <Container>
        <Header />

        <FilterInput />

        {this.state.showSpinner ? (
          <div className={styles.containerSpinner}>
            <Spinner
              as="span"
              animation="border"
              role="status"
              aria-hidden="false"
              className={`${styles.spinner} ms-3`}
            />
          </div>
        ) : null}
        <Row>
          <Col className="p-0">
            <Table striped bordered hover id="PList">
              {/* name forks_count stargazers_count updated_at */}
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center  ">Total Forks</th>
                  <th className="text-center  ">Total Star</th>
                  <th className="text-center  ">Last Update</th>
                </tr>
              </thead>
              <tbody>{lst_rep.length > 0 && lst_rep.slice(0, 10)}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default popular;
