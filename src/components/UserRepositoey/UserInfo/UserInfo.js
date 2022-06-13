import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import axios_user from "../../../HOC/Axios";
import Users from "../RepositoryListManager";
import Head from "../../Header/Header";
import styles from "./userinfo.module.css";
const layout = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [showSpinner, TogleSpinner] = useState(false);
  //Add Name To Url
  const AddNameToUrlHandler = (e) => {
    setUserName(e.target.value);
  };
  // get user info form server
  const getUserInfoHandler = () => {
    if (!(userName && userName.length > 0)) return;
    TogleSpinner(true);
    axios_user
      .get("/users/" + userName)
      .then((res) => {
        if (!res.data) return;
        const data = { ...res.data };
        setUserInfo([{ ...data }]);
        TogleSpinner(false);
      })
      .catch((er) => {
        //handle error
        console.log(er);
      });
  };

  return (
    <Container>
      <Head />
      <Row>
        <Col>
          {showSpinner ? (
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
          <div className="hstack gap-3 mt-3 ">
            <Form.Group
              controlId="usrName"
              className="mb-3"
              style={{ width: "85%" }}
            >
              <Form.Label>Enter User Name</Form.Label>
              <Form.Control
                type="text"
                onChange={AddNameToUrlHandler}
                className=" p-3"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={getUserInfoHandler}
              className="mt-3 p-3"
              style={{ width: "15%" }}
            >
              send
            </Button>
          </div>
        </Col>
      </Row>
      {userInfo.length ? <Users data={userInfo} /> : null}
    </Container>
  );
};
export default layout;
