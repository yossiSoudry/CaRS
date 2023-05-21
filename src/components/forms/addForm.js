import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/contextProvider';
import { FaRegSave } from 'react-icons/fa';
import { apiPost } from '../../services/services';
import DoButton from '../../components/buttons/doButton';
import FormInput from './formInput';
import { Fragment } from 'react';
import { RiEraserFill } from 'react-icons/ri';
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { Modal, Tooltip } from 'antd';
import { useStateTableContext } from '../../contexts/tableContext';
import Files from '../files/files';

const AddForm = ({ title, FormFunc, formInputs, url, cleanValues, setOpenForm }) => {
  const { currentColor, currentMode, user } = useStateContext();
  const { values,setValues} = useStateTableContext();
  const [open, setOpen] = useState(false);
  useEffect(() => {
  }, []);

  const updateValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // const updateFile = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  return (
    <Fragment>
      <div className='bg-white rounded-md dark:bg-secondary dark:text-gray-200 p-4'>
        <div className={`flex items-center p-3 justify-center pb-7`}>
          <div className='flex-col'>
            <h2 className='text-4xl mb-2 text-center text-zinc-600 dark:text-zinc-400'>{`הקמת ${title}`}</h2>
            {FormFunc && FormFunc()}
          </div>
        </div>
        <form className='group'>
          <div className='flex gap-4 items-center justify-center flex-wrap p-4 border-y-1 border-color mt-0.5'>
            {formInputs?.map((input, i) => (
              <FormInput {...input} key={i} value={values[input.name]} onChange={updateValue} />
            ))}
          </div>
          <div className='flex gap-4 items-center justify-end p-3'>
              <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                footer={null}
                className={currentMode === 'dark' ? 'dark' : 'light'}
              >
                <Files 
                row={values}
                // updateOne={updateOne}
                 />
              </Modal>
            <DoButton
              title={`מסמכי ${title}`}
              color={currentColor}
              size='4xl'
              customFunc={() => {
                setOpen(true);
              }}
              icon={<AiTwotoneFolderOpen />}
              classN='mt-2'
            />
            <DoButton
              title='נקה טופס'
              color={currentColor}
              size='4xl'
              customFunc={() => {
                setValues(cleanValues);
              }}
              icon={<RiEraserFill />}
              classN='mt-2'
            />
            <DoButton
              title='שמור'
              color={currentColor}
              size='4xl'
              customFunc={() => {
                apiPost(url, values);
                setValues(cleanValues)
                setOpenForm(false)
                console.log(values);
              }}
              icon={<FaRegSave />}
              classN='mt-2 group-invalid:pointer-events-none group-invalid:opacity-30'
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddForm;
