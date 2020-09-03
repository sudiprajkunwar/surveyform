import React from "react";
import { Select, Form } from "antd";
import styled from "@emotion/styled";

const SelectStyle = styled(Select)`
  color: #164475;
  font-weight: 600;
  .ant-select-selector {
    border: none !important;
    box-shadow: 0 1px 5px #164475;
    height: 37px !important;
    padding: 5px 20px !important;
  }
`;
const Drop = ({ onChange, name }) => {
  const { Option } = Select;
  // const [data, setData] = useState();
  // const handleChange = (value) => {
  //   // setData({ ...data, value });
  //   setData(value);
  //   // console.log(data);
  //   console.log(`selected ${data}`);
  // };

  // const [form] = Form.useForm();

  // const check = form.getFieldValue("questiontype");
  // console.log(check);
  return (
    <Form.Item initialValue="Subjective" name={name}>
      <SelectStyle style={{ width: 125 }} onChange={onChange}>
        <Option value="Subjective">Subjective</Option>
        <Option value="Rating">Rating</Option>
        <Option value="Objective">Objective</Option>
      </SelectStyle>
    </Form.Item>
  );
};

export default Drop;
