import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Cell, CellImg } from "../styled-components/table";
import userPhoto from "./../../assets/user.jpg";

function ArtistComponent({ item }) {
	return (
		<Row>
			<Cell>
				<CellImg src={item.artworkUrl100 ?? userPhoto} alt="" />
			</Cell>
			<Cell>{item.artistName}</Cell>
			<Cell>{item.trackName}</Cell>
			<Cell>
				<NavLink to={"/" + item.trackId}>Details</NavLink>
			</Cell>
		</Row>
	);
}

export default ArtistComponent;
