// import React, { useState } from "react";
// import { Form} from "antd";
// import styled from "@emotion/styled";
// import Drop from "../dropdown";
// import Answer from "../answer";
// import Rating from "../rating/Rating";
// import { InputStyle } from "../../atoms/InputStyle";

// const FormBlock = styled.div`
//   display: flex;
//   margin: 0 auto;
//   width: 70%;
//   box-shadow: 0 0 8px #9e9797 !important;
//   padding: 25px !important;

//   .ant-select {
//     flex: 0.5;
//   }
//   .form {
//     flex: 2;
//   }
//   label {
//     color: #5a5050;
//     font-size: 16px !important;
//     font-weight: 500;
//   }
// `;

// const Questionanswer = () => {
//   const [data, setData] = useState();
//   const handleChange = (value) => {
//     // console.log(value);
//     setData(value);
//     console.log(`data=${value}`);
//   };
//   return (
//     <>
//       <FormBlock>
//         <div className="form">
//           <Form.Item
//             name="Question"
//             label=" Question"
//             rules={[
//               {
//                 required: true,
//               },
//             ]}
//           >
//             <InputStyle />
//           </Form.Item>
//           {data === "1" ? <Rating /> : <Answer />}
//         </div>
//         <Drop onChange={handleChange} />
//       </FormBlock>
//     </>
//   );
// };

// export default Questionanswer;

import React, { useState } from "react";
import { Form, Button, Space, Select } from "antd";
import styled from "@emotion/styled";
import Drop from "../dropdown";
import Subjective from "../subjective";
import Rating from "../rating/Rating";
import { InputStyle } from "../../atoms/InputStyle";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const SpaceStyle = styled(Space)`
  .ant-space-item {
    width: 100%;
  }
`;
const FormBlock = styled.div`
  display: flex;
  margin: 40px auto;
  width: 70%;
  box-shadow: 0 0 8px #9e9797 !important;
  padding: 25px !important;

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
const Remove = styled(MinusCircleOutlined)`
  margin-top: 165px;
`;
const Buttonstyle = styled(Button)`
  width: 35%;
  margin-left: 173px;
  font-weight: 600;
  border: 2px solid #83afcc;
  border-radius: 5px;
`;
const Questionanswer = ({ form }) => {
  const [data, setData] = useState("Subjective");
  // const [qtype, setQtype] = useState([{ questiontype: "Subjective" }]);
  const [qtype, setQtype] = useState([]);
  const { Option } = Select;

  const handleChange = (value) => {
    setData(value);
    console.log(data);
  };

  // const onHandle = () => {
  //   const check = form.getFieldValue("questionslist");
  //   setQtype(check);
  //   console.log(qtype);
  // };

  const addbtn = () => {
    const check = form.getFieldValue("surveytitle");
    // console.log(check);
    setQtype(check);
    console.log(qtype);
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

                        {
                          // qtype.length > 0 &&
                          qtype[idx].questiontype === "Subjective" ? (
                            <Subjective />
                          ) : (
                            <Rating />
                          )
                        }
                      </div>
                      <Form.Item
                        initialValue="Subjective"
                        {...field}
                        name={[field.name, "questiontype"]}
                        fieldKey={[field.fieldKey, "questiontype"]}
                      >
                        <SelectStyle style={{ width: 200 }}>
                          <Option value="Subjective">Subjective</Option>
                          <Option value="Rating">Rating</Option>
                        </SelectStyle>
                      </Form.Item>

                      <Remove
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </FormBlock>
                  </SpaceStyle>
                ))}
                <Form.Item>
                  <Buttonstyle
                    type="primary"
                    onClick={() => (add(), addbtn())}
                    // onClick={() => add()}
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
