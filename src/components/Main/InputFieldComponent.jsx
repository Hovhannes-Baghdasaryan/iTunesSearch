import React from "react";
import { useSelector } from "react-redux";
import { UsersLimitCount } from "../../Redux/Selectors/count";
import { Select, Option } from "../styled-components/table";
import { InputDiv, InputElement } from "../styled-components/common";

function InputFieldComponent({ name, setName, setLimit }) {
  const count = useSelector(UsersLimitCount());

  return (
    <InputDiv>
      <InputElement value={name} onChange={(e) => setName(e.target.value)} />
      <Select onChange={(e) => setLimit(e.target.value)}>
        {count.map((item, index) => {
          return <Option key={index}>{index + 1}</Option>;
        })}
      </Select>
    </InputDiv>
  );
}

export default InputFieldComponent;
