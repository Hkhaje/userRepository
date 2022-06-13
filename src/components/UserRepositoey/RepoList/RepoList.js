import { Row, Col, Container, Table, Button, Modal } from "react-bootstrap";
import { Component } from "react";
import axios_user from "../../../HOC/Axios";
import styles from "./repoList.module.css";
import { Spinner } from "react-bootstrap";

class repoList extends Component {
  state = {
    ReposList: [],
    showSpinner: false,
  };
  componentDidMount() {
    if (
      !(
        this.props.userName &&
        this.props.userName.length > 0 &&
        this.props.login.length > 0
      )
    )
      return;
    this.setState({ showSpinner: true });
    axios_user
      .get(`/users/${this.props.login}/repos`)
      .then((res) => {
        if (!res.data) return;
        // const data = { ...res.data };
        const data = [...res.data];
        this.setState({ ReposList: data, showSpinner: false });
      })
      .catch((er) => {
        console.log(er);
      });
  }
  sortList = (cell) => {
    let sort_List = "";
    switch (cell) {
      case "fork":
        sort_List = this.state.ReposList.sort(function (Va, Vb) {
          return parseInt(Vb.forks_count) - parseInt(Va.forks_count);
        });
        this.setState({ ReposList: sort_List });
        break;
      case "star":
        sort_List = this.state.ReposList.sort(function (Va, Vb) {
          return parseInt(Vb.stargazers_count) - parseInt(Va.stargazers_count);
        });
        this.setState({ ReposList: sort_List });
        break;
      case "update":
        sort_List = this.state.ReposList.sort(function (Va, Vb) {
          return parseInt(Vb.updated_at) - parseInt(Va.updated_at);
        });
        this.setState({ ReposList: sort_List });
        break;
    }
  };
  render() {
    const lst_rep = this.state.ReposList.map((val) => (
      <tr key={val.id}>
        <td>{val.name ? val.name : "Not Register"}</td>
        <td>{val.forks_count}</td>
        <td>{val.stargazers_count}</td>
        <td>{val.updated_at}</td>
      </tr>
    ));
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Repositoey List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col className="p-0">
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
                  <Table striped bordered hover className={styles.p_table}>
                    {/* name forks_count stargazers_count updated_at */}
                    <thead>
                      <tr>
                        <th className="text-center">Name</th>
                        <th
                          className="text-center text-danger text-decoration-underline "
                          role="button"
                          onClick={() => this.sortList("fork")}
                        >
                          Total Forks
                        </th>
                        <th
                          className="text-center text-danger text-decoration-underline"
                          role="button"
                          onClick={() => this.sortList("star")}
                        >
                          Total Star
                        </th>
                        <th
                          className="text-center text-danger text-decoration-underline"
                          role="button"
                          onClick={() => this.sortList("update")}
                        >
                          Last Update
                        </th>
                      </tr>
                    </thead>
                    <tbody>{lst_rep.length > 0 && lst_rep}</tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default repoList;
