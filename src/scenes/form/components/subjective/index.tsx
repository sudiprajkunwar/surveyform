import React from "react";
import { Form, Input } from "antd";
import styled from "@emotion/styled";

const { TextArea } = Input;
const TextStyle = styled(TextArea)`
  border: 2px solid #cbcbcb;
  border-radius: 4px;
`;
const Subjective = () => {
  return (
    <Form.Item label=" Answer">
      <TextStyle rows={4} placeholder="Enter Your answer here" />
    </Form.Item>
  );
};

export default Subjective;
