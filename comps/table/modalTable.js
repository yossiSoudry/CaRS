import React, {  useState } from 'react'
import { CarsSimpleTable } from '../pages/cars/carsSimpleTable'
import { DriversSimpleTable } from '../../comps/driversSimpleTable'
import { Modal } from 'antd';
import { useStateContext } from '../../contexts/contextProvider';
import { AiOutlineEdit } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'


export const ModalTable = ({tableSearch , item, row ,index, empty}) => {
  const { isLoading, currentColor } = useStateContext();
  const [open, setOpen] = useState(false);
  console.log(item,index);
  console.log(row);
 
  return (
    <div >
      <span className='flex'>
      {row.status === 'עתידי' &&<span onClick={() => setOpen(true)}>{<AiOutlineEdit className='text-xl' style={{color:currentColor}}/>}</span>}
      {(row.status === 'עתידי' && !empty) && <span onClick={() => row[item].splice(index,1)}>{<TiDelete className='text-xl' style={{color:currentColor}}/>}</span>}
      </span>
      <Modal
        title='אנא בחר'
        centered
        open={open}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={2000}
        cancelText='ביטול'
      >
       {tableSearch === "cars" && <CarsSimpleTable  setOpen={setOpen} item={item} row={row}/>}
       {tableSearch === "drivers" && <DriversSimpleTable  setOpen={setOpen} item={item} row={row} index={index} />}
      </Modal>
    </div>
  )

}
