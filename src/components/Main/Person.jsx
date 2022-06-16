import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Row, Cell } from "../styled-components/Table";
import { SetUsersThunkCreator } from "./../../Redux/Reducers/usersReducer";
import { UsersSearch } from "./../../Redux/Selectors/users";
import Preloader from "./../common/Preloader";

function Person({ name, limit }) {
  const dispatch = useDispatch();
  const users = useSelector(UsersSearch());

  useEffect(() => {
    dispatch(SetUsersThunkCreator(name, limit));
  }, [name, limit]);

  return (
    <>
      {users ? (
        users.map((item, index) => (
          <Row key={index}>
            <Cell>{<img src={item.artworkUrl100} alt="" />}</Cell>
            <Cell>{item.artistName}</Cell>
            <Cell>{item.trackName}</Cell>
            <Cell>
              <NavLink to={"/" + item.trackId}>Details</NavLink>
            </Cell>
          </Row>
        ))
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Person;
