import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { SetProfileThunkCreator } from "./../../Redux/Reducers/ArtistReducer";
import { DetailsDiv, DetailsTopic } from "./../styled-components/details";
import { getArtist } from "./../../Redux/Selectors/artist";
import Preloader from "../common/Preloader";
import AudioPlayerComponent from "./../AudioPlayer/AudioPlayerComponent";

function Details() {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const profile = useSelector(getArtist());

	useEffect(() => {
		dispatch(SetProfileThunkCreator(userId));
	}, []);

	return (
		<>
			{profile ? (
				<DetailsDiv>
					<NavLink to="/">Go Back</NavLink>
					<AudioPlayerComponent
						track={profile.previewUrl}
						image={profile.artworkUrl100}
						title={profile.trackName}
						artist={profile.artistName}
						Index={profile.trackId}
					/>
				</DetailsDiv>
			) : (
				<Preloader />
			)}
		</>
	);
}

export default Details;
