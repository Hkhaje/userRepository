import React from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
const filterInput = () => {
  const filterList = (event) => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();

    if (filter.length >= 3 || event.key === "Backspace") {
      table = document.getElementById("PList");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  };

  return (
    <Row>
      <Col className="p-0">
        <div className="hstack gap-3">
          <Form.Group controlId="filterInput" className="mb-3 w-100 ">
            <Form.Label>Enter an Name Of List</Form.Label>
            <Form.Control type="text" onKeyUp={filterList} className="p-3" />
          </Form.Group>
        </div>
      </Col>
    </Row>
  );
};
export default filterInput;
