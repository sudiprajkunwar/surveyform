import React from "react";
import { Rate, Form } from "antd";

const Rating = () => {
  return (
    <Form.Item label=" Rating">
    <Rate allowHalf defaultValue={2.5} />
    </Form.Item>
  );
};

export default Rating;
