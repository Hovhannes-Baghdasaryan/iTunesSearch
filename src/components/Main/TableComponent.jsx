import React from "react";
import { useSelector } from "react-redux";
import { UsersSearch } from "../../Redux/Selectors/users";
import { TableStyle, Tbody } from "../styled-components/table";
import ArtistComponent from "./ArtistComponent";
import Preloader from "./../common/Preloader";

function TableComponent() {
  const users = useSelector(UsersSearch());

  return (
    <>
      {users ? (
        <TableStyle>
          <Tbody>
            {users?.map((item, index) => (
              <ArtistComponent key={index} item={item} />
            ))}
          </Tbody>
        </TableStyle>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default TableComponent;
