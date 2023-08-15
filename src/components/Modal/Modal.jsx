import { useState } from 'react';
import MetaBtn from '../Button/MetaBtn';
import design from './modal.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Pass the form data to the parent component
    onSubmit({ ...formData });
    setFormData({
      title: '',
      description: '',
      price: '',
      duration: '',
    });
  };

  return (
    <div className={design.Modal}>
      <div className={design.ModalOverlay}></div>
      <div className={design.ModalContainer}>
        <div className={design.closeModal}>
          <CloseOutlinedIcon sx={{ marginBottom: '15px' }} onClick={onClose} />
        </div>
        <form className={design.ModalForm}>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            placeholder='Enter Job title...'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            placeholder='Enter description...'
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            placeholder='Enter price...'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
          <label htmlFor='duration'>Duration:</label>
          <input
            type='text'
            id='duration'
            placeholder='Enter duration...'
            name='duration'
            value={formData.duration}
            onChange={handleChange}
          />
        </form>
        <MetaBtn
          content='Submit'
          onClick={handleSubmit}
          style={{ padding: '5px 12px', width: '100%', marginTop: '30px' }}
        />
      </div>
    </div>
  );
};

export default Modal;
