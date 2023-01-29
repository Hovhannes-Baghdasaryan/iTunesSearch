import React from "react";
import {useSelector} from "react-redux";
import {UsersSearch} from "../../Redux/Selectors/users";
import {TableStyle, Tbody} from "../styled-components/table";
import ArtistComponent from "./ArtistComponent";

import {Spin} from "antd";

function TableComponent() {
    const users = useSelector(UsersSearch());

    return (
        <>
            {users ? (
                <TableStyle>
                    <Tbody>
                        {users?.map((item, index) => (
                            <ArtistComponent key={index} item={item}/>
                        ))}
                    </Tbody>
                </TableStyle>
            ) : (
                <Spin/>
            )}
        </>
    );
}

export default TableComponent;
