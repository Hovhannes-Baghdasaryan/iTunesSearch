import React from "react";
import AppSuspense from "./../../hoc/AppSuspense";
import { Route, Routes } from "react-router-dom";
import { Mainpage, Details } from "../../utils/LazyComponents";

function RoutesComponent() {
	return (
		<Routes>
			<Route path="/">
				<Route path=":userId" element={AppSuspense(Details)} />
				<Route path="" element={AppSuspense(Mainpage)} />
			</Route>
		</Routes>
	);
}

export default RoutesComponent;
