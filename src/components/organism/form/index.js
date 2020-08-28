import React, { useState } from "react";
import { Form, Button } from "antd";
import styled from "@emotion/styled";
import Questionanswer from "../Q&A";
import { InputStyle } from "../../atoms/InputStyle";

const FormStyle = styled(Form)`
  margin-top: 40px;

  .ant-form-item {
    padding-left: 40px !important;
  }
  .ant-col-8 {
    max-width: 106px;
  }
  label {
    font-weight: 500;
    font-size: 17px;
    color: #888888;
    :before {
      display: none !important;
    }
  }

  input {
    padding: 7px 11px;
  }
`;
const ButtonStyle = styled(Button)`
  margin-top: 30px;
  height: 40px;
  border-radius: 3px;
  width: 100px;
  margin: 15px;
  background-color: #65866f;
  border: none;
  transition: 0.1s ease;
  margin-left: 110px;
`;
const ButtonBlock = styled.div`
  .ant-btn-primary {
    background-image: linear-gradient(#5ba772, #17582b);
    :hover {
      background-image: linear-gradient(green, #17582b);
    }
  }
`;

// const FormBlock = styled.div`
//   margin: 0 auto;
//   width: 50%;
//   box-shadow: 0 0 8px #9e9797 !important;
//   padding: 25px !important;
// `;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const SurveyForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <FormStyle {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="surveytitle"
        label="Survey Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputStyle placeholder="Enter survey title" />
      </Form.Item>
      <Questionanswer form={form} />
      {/* <Test /> */}
      <Form.Item>
        <ButtonBlock>
          <ButtonStyle type="primary" htmlType="submit">
            Create
          </ButtonStyle>
        </ButtonBlock>
      </Form.Item>
    </FormStyle>
  );
};

export default SurveyForm;
