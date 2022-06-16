import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { SetProfileThunkCreator } from "./../Redux/Reducers/profileReducer";
import { DetailsDiv, DetailsP } from "./styled-components/Details";

function Details() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.ProfilePage.profile);

  useEffect(() => {
    dispatch(SetProfileThunkCreator(userId));
  }, []);

  return (
    <DetailsDiv>
      <NavLink to="/">Go Back</NavLink>
      <img src={profile?.artworkUrl100} />
      <DetailsP>
        {profile?.artistName} - {profile?.trackName}
      </DetailsP>
      <audio src={profile?.previewUrl} controls />
    </DetailsDiv>
  );
}

export default Details;
