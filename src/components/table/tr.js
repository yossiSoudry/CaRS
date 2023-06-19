import { useState } from 'react';
import { FolderOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { TfiLocationPin } from 'react-icons/tfi'
import RowGrid from './rowGrid';
import CardGrid from './cardGrid';
import { useStateContext } from '../../contexts/contextProvider';

const dateTimer = (time) => {
  let date = new Date(time);
  let dateNow = new Date(Date.now());
  let delta = date - dateNow;
  delta = delta / (1000 * 3600 * 24);
  return delta.toFixed(0);
};

export default function Tr({ row, columns, space, setRow, stickyRight, stickyLeft, i }) {
  const { currentColor, displayLines } = useStateContext();
  const [edit, setEdit] = useState(false);
  const [filesModal, setFilesModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);

  const updateOne = async () => {
    let newRow = row;
    setRow(newRow);
  };

  return (
    <>
      {displayLines ? (
        <RowGrid
          i={i}
          row={row}
          space={space}
          edit={edit}
          setEdit={setEdit}
          columns={columns}
          dateTimer={dateTimer}
          FolderOutlined={FolderOutlined}
          EditOutlined={EditOutlined}
          SaveOutlined={SaveOutlined}
          currentColor={currentColor}
          filesModal={filesModal}
          setFilesModal={setFilesModal}
          updateOne={updateOne}
          stickyRight={stickyRight}
          stickyLeft={stickyLeft}
          TfiLocationPin={TfiLocationPin}
          locationModal={locationModal}
          setLocationModal={setLocationModal}
        />
      ) : (
        <CardGrid
          i={i}
          row={row}
          space={space}
          edit={edit}
          setEdit={setEdit}
          columns={columns}
          dateTimer={dateTimer}
          FolderOutlined={FolderOutlined}
          EditOutlined={EditOutlined}
          SaveOutlined={SaveOutlined}
          currentColor={currentColor}
          filesModal={filesModal}
          setFilesModal={setFilesModal}
          updateOne={updateOne}
          TfiLocationPin={TfiLocationPin}
          locationModal={locationModal}
          setLocationModal={setLocationModal}
        />
      )}
    </>
  );
}
