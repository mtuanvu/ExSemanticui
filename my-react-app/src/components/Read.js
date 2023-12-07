import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
//axios dùng cho các thao tác : GET,PUT,POST,DELETE
function Read() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://656ae3dfdac3630cf72765c1.mockapi.io/User")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const getData = () => {
    axios
      .get("https://656ae3dfdac3630cf72765c1.mockapi.io/User")
      .then(() => {});
  };
  const onDelete = (id) => {
    axios
      .delete("https://656ae3dfdac3630cf72765c1.mockapi.io/User/{id}")
      .then(() => {
        // getData();
        console.log("Xóa thành công");
      });
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Chech Box</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default Read;
