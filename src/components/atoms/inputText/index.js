import React from "react";
import { InputStyle } from "./inputStyle";
const InputText = ({ name, type, onChange, placeholder, value }) => (
  <InputStyle
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />
);

export default InputText;
