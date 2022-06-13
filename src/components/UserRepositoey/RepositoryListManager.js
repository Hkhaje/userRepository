import { useState } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import styles from "./repositoryListManager.module.css";
import RepoList_modal from "./RepoList/RepoList";
const users = (props) => {
  const [showModal, setShowModa] = useState(false);
  //show moda
  const showModalHandler = () => {
    console.log("checkk", props.data[0].name);
    if (props.data[0].name && props.data[0].name.length > 0) {
      setShowModa(true);
    } else {
      alert("Dont Exist Data For show");
    }
  };
  const handleClose = () => {
    setShowModa(false);
  };
  console.log("data", props.data);
  return (
    <Container>
      {showModal && (
        <RepoList_modal
          show={showModal}
          handleClose={handleClose}
          userName={props.data[0].name}
          login={props.data[0].login}
        />
      )}
      <Row>
        <Col className="p-0">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center"> Name</th>
                <th className="text-center">Address</th>
                <th className="text-center">Total Repo</th>
                <th className="text-center">Image</th>
                <th className="text-center">list Repo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {props.data[0].name ? props.data[0].name : "Not Register"}
                </td>
                <td>
                  {props.data[0].location
                    ? props.data[0].location
                    : "Not Register"}
                </td>
                <td>
                  {props.data[0].public_repos
                    ? props.data[0].public_repos
                    : "Not Register"}
                </td>
                <td>
                  <img
                    className={styles.img}
                    src={
                      props.data[0].avatar_url ? props.data[0].avatar_url : "#"
                    }
                  />
                </td>
                <td>
                  <Button variant="danger" onClick={showModalHandler}>
                    Repositioty List
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default users;
