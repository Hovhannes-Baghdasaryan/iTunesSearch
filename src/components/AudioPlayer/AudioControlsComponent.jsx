import React from "react";
import { ReactComponent as Play } from "./../../assets/audioControls/play.svg";
import { ReactComponent as Pause } from "./../../assets/audioControls/pause.svg";

const AudioControlsComponent = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => (
	<div className="audio-controls">
		{isPlaying ? (
			<button
				type="button"
				className="pause"
				onClick={() => onPlayPauseClick(false)}
				aria-label="Pause"
			>
				<Pause />
			</button>
		) : (
			<button
				type="button"
				className="play"
				onClick={() => onPlayPauseClick(true)}
				aria-label="Play"
			>
				<Play />
			</button>
		)}
	</div>
);

export default AudioControlsComponent;
