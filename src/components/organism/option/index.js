import React, { useState } from "react";
import { Form, Space, Input, Button } from "antd";
import { InputStyle } from "../../atoms/InputStyle";
import styled from "@emotion/styled";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const OptionBlock = styled.div`
  margin-left: 107px;
  width: 100%;
`;

const Options = ({ form }) => {
  return (
    <>
      <Form.Item
        name="option1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputStyle placeholder="option1" />
      </Form.Item>
      <Form.Item
        name="option2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputStyle placeholder="option2" />
      </Form.Item>
      <Form.List name="option">
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
                    <Input placeholder="Option" />
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </>
  );
};

export default Options;

// import React, { useState } from "react";

// function Option({ inputList, setInputList }) {
//   // const [inputList, setInputList] = useState([{ firstName: "" }]);

//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the Remove button
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setInputList([...inputList, { option: "" }]);
//   };

//   return (
//     <form className="option">
//       {inputList.map((x, i) => {
//         return (
//           <div className="box">
//             <input
//               name="option"
//               placeholder="option"
//               value={x.option}
//               onChange={(e) => handleInputChange(e, i)}
//             />

//             <div className="btn-box">
//               <button className="mr10" onClick={() => handleRemoveClick(i)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         );
//       })}
//       <button onClick={handleAddClick}>Add</button>
//     </form>
//   );
// }

// export default Option;
