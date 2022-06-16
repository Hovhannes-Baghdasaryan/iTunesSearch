import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TableStyle, Tbody, Select, Option } from "../styled-components/Table";
import { InputDiv, MainWrapper, Input } from "./../styled-components/common";
import Person from "./Person";
import { UsersLimitCount } from "./../../Redux/Selectors/count";

function Mainpage() {
  const count = useSelector(UsersLimitCount());
  const [value, setValue] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(value), 1000);
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <MainWrapper>
      <InputDiv>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Select onChange={(e) => setLimit(e.target.value)}>
          {count.map((item, index) => {
            return <Option key={index}>{index + 1}</Option>;
          })}
        </Select>
      </InputDiv>
      <TableStyle>
        <Tbody>
          <Person name={displayMessage} limit={limit} />
        </Tbody>
      </TableStyle>
    </MainWrapper>
  );
}

export default Mainpage;
