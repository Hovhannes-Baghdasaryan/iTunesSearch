import React, { useState, useEffect, useRef } from "react";
import AudioControlsComponent from "./AudioControlsComponent";
import Backdrop from "./BackDropComponent";
import "./audio.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayerComponent = ({ track, image, title, artist, Index }) => {
	// State
	const [trackIndex, setTrackIndex] = useState(Index);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	// Refs
	const audioRef = useRef(new Audio(track));
	const intervalRef = useRef();
	const isReady = useRef(false);

	// Destructure for conciseness
	const { duration } = audioRef.current;

	const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
	const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextTrack();
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	const onScrub = value => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};

	const toPrevTrack = () => {
		if (trackIndex - 1 < 0) {
			setTrackIndex(track.length - 1);
		} else {
			setTrackIndex(trackIndex - 1);
		}
	};

	const toNextTrack = () => {
		if (trackIndex < track.length - 1) {
			setTrackIndex(trackIndex + 1);
		} else {
			setTrackIndex(0);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	// Handles cleanup and setup when changing tracks
	useEffect(() => {
		audioRef.current.pause();

		audioRef.current = new Audio(track);
		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			// Set the isReady ref as true for the next pass
			isReady.current = true;
		}
	}, [trackIndex]);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<div className="audio-player">
			<div className="track-info">
				<img className="artwork" src={image} alt={`track artwork for ${title} by ${artist}`} />
				<h2 className="title">{title}</h2>
				<h3 className="artist">{artist}</h3>
				<AudioControlsComponent
					isPlaying={isPlaying}
					onPrevClick={toPrevTrack}
					onNextClick={toNextTrack}
					onPlayPauseClick={setIsPlaying}
				/>
				<input
					type="range"
					value={trackProgress}
					step="1"
					min="0"
					max={duration ? duration : `${duration}`}
					className="progress"
					onChange={e => onScrub(e.target.value)}
					onMouseUp={onScrubEnd}
					onKeyUp={onScrubEnd}
					style={{ background: trackStyling }}
				/>
			</div>
			<Backdrop trackIndex={trackIndex} activeColor={"green"} isPlaying={isPlaying} />
		</div>
	);
};

export default AudioPlayerComponent;
