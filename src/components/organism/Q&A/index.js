import React, { useState } from "react";
import { Form, Button, Space, Select } from "antd";
import styled from "@emotion/styled";
import Drop from "../dropdown";
import Subjective from "../subjective";
import Rating from "../rating/Rating";
import { InputStyle } from "../../atoms/InputStyle";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const SpaceStyle = styled(Space)`
  .ant-space-item {
    width: 100%;
  }
`;
const FormBlock = styled.div`
  position: relative;
  display: flex;
  margin: 40px auto;
  width: 70%;
  margin-bottom: 0px;
  box-shadow: 0 3px 8px #9e9797 !important;
  padding: 25px !important;
  border-radius: 5px;

  .ant-select {
    flex: 0.5;
  }
  .form {
    flex: 2;
  }
  label {
    color: #5a5050;
    font-size: 16px !important;
    font-weight: 500;
  }
`;

const SelectStyle = styled(Select)`
  color: #164475;
  font-weight: 600;
  .ant-select-selector {
    border: none !important;
    box-shadow: 0 2px 5px #164475;
    height: 37px !important;
    padding: 5px 20px !important;
  }
`;

const RemoveButtonStyle = styled(Button)`
  position: absolute;
  right: 25px;
  top: 114px;
  transition: 0.5s ease;
  border-radius: 3px;
  :hover {
    background: red;
    border-color: red;
    color: white;
  }
`;

const Buttonstyle = styled(Button)`
  width: 35%;
  margin-left: 110px;
  height: 40px;
  font-weight: 600;
  border: 3px solid #83afcc;
  border-radius: 5px;
  color: #83afcc;
  margin-top: 33px;
`;
const Questionanswer = ({ form }) => {
  const [data, setData] = useState("Subjective");
  let initailObj = { questiontype: "Subjective" };
  const [qtype, setQtype] = useState([]);
  const { Option } = Select;

  const handleChange = (value) => {
    setData(value);
    console.log(data);
  };

  const onHandle = () => {
    const check = form.getFieldValue("questionslist");
    setQtype(check);
    console.log(qtype);
  };

  const addbtn = () => {
    setQtype((prev) => [...prev, initailObj]);
  };

  return (
    <>
      <FormBlock>
        <div className="form">
          <Form.Item
            name="question"
            label=" Question"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputStyle />
          </Form.Item>
          {data === "Subjective" ? <Subjective /> : <Rating />}
        </div>
        <Drop name="questiontype" onChange={handleChange} />
      </FormBlock>
      {/* add btn */}
      <div className="form">
        <Form.List name="questionslist">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field, idx) => (
                  <SpaceStyle
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="start"
                  >
                    <FormBlock>
                      <div className="form">
                        <Form.Item
                          {...field}
                          name={[field.name, "Question"]}
                          fieldKey={[field.fieldKey, "Question"]}
                          label=" Question"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <InputStyle />
                        </Form.Item>

                        {qtype[idx].questiontype === "Subjective" ? (
                          <Subjective />
                        ) : (
                          <Rating />
                        )}
                      </div>
                      <Form.Item
                        initialValue="Subjective"
                        {...field}
                        name={[field.name, "questiontype"]}
                        fieldKey={[field.fieldKey, "questiontype"]}
                      >
                        <SelectStyle style={{ width: 125 }} onChange={onHandle}>
                          <Option value="Subjective">Subjective</Option>
                          <Option value="Rating">Rating</Option>
                        </SelectStyle>
                      </Form.Item>
                      <RemoveButtonStyle
                        onClick={() => {
                          remove(field.name);
                        }}
                      >
                        <DeleteOutlined />
                      </RemoveButtonStyle>
                    </FormBlock>
                  </SpaceStyle>
                ))}
                <Form.Item>
                  <Buttonstyle
                    // type="primary"
                    onClick={() => (add(), addbtn())}
                    block
                  >
                    <PlusOutlined /> Add Questions
                  </Buttonstyle>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      </div>
    </>
  );
};

export default Questionanswer;
