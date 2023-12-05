import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-css";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkBox);
    // axios.post('https://656ae3dfdac3630cf72765c1.mockapi.io/User'),
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          Label="Tôi đồng ý với các điều khoản!"
          onChange={(e) => setCheckBox(!checkBox)}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
