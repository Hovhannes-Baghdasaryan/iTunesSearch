import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainWrapper } from "./../styled-components/common";
import { SetUsersThunkCreator } from "../../Redux/Reducers/UsersReducer";
import InputFieldComponent from "./../Main/InputFieldComponent";
import TableComponent from "./../Main/TableComponent";

function Mainpage() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [limit, setLimit] = useState(1);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			if (name !== "") dispatch(SetUsersThunkCreator(name, limit));
		}, 1000);
		return () => clearTimeout(timeOutId);
	}, [name, limit]);

	return (
		<MainWrapper>
			<InputFieldComponent name={name} setName={setName} setLimit={setLimit} />
			<TableComponent />
		</MainWrapper>
	);
}

export default Mainpage;
