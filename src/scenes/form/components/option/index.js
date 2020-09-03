import React from "react";
import { Form, Space, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const InputStyle = styled(Input)`
  width: 201%;
`;

const Remove = styled(MinusCircleOutlined)`
  position: absolute;
  right: -17px;
  padding-top: 11px;
`;
const Options = ({ name }) => {
  return (
    <Form.List name={[name, "options"]}>
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, idx) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="start"
              >
                <Form.Item
                  {...field}
                  name={[field.name, "option"]}
                  fieldKey={[field.fieldKey, "option"]}
                  rules={[{ required: true, message: "option required" }]}
                >
                  <InputStyle placeholder="Option" />
                </Form.Item>

                {idx >= 2 && (
                  <Remove
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                )}
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={
                  () => add()
                  //  addOption()
                }
                block
              >
                <PlusOutlined /> Add field
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default Options;
