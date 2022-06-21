import "./App.css";
import React from "react";
import store from "./Redux/store";
import TopicComponent from "./components/Main/TopicComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RoutesComponent from "./components/Routes/RoutesComponent";

function App() {
	return (
		<div className="mainWrapper">
			<TopicComponent />
			<RoutesComponent />
		</div>
	);
}

export default () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
};
