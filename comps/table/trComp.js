import { AiOutlineSave } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

// import { useStateContext } from "../../contexts/contextProvider";
import { useState } from "react";
// import { roles } from "../../data/myData";
import TableRow from "./tableRow";
import CardGrid from "./cardGrid";

export default function TrComp({ row, displayLines, columns, space }) {
  // const { currentColor } = useStateContext();
  const [edit, setEdit] = useState(false);

  // const r = roles.filter((role) => role.theRole.trim() === row.role.trim());
  // const [roleColor, setRoleColor] = useState(r[0].theColor);

  return (
    <>
      {displayLines ? (
        <TableRow
          row={row}
          space={space}
          // roleColor={roleColor}
          // setRoleColor={setRoleColor}
          // roles={roles}
          edit={edit}
          setEdit={setEdit}
          AiOutlineSave={AiOutlineSave}
          MdEdit={MdEdit}
          columns={columns}
        />
      ) : (
        <CardGrid
          row={row}
          space={space}
          // roleColor={roleColor}
          // setRoleColor={setRoleColor}
          // roles={roles}
          edit={edit}
          setEdit={setEdit}
          AiOutlineSave={AiOutlineSave}
          MdEdit={MdEdit}
          columns={columns}
        />
      )}
    </>
  );
}
