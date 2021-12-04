import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { addTeacher } from '../Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
export default function  AddTeacher () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const t = useSelector(state => state.teachers);
    const text = useSelector(state => state.text);
    const selected = useSelector(state => state.selected);
    const onSubmit = (e) => { 
    dispatch(addTeacher(
        {id:uuidv4(),
        name:name,
        email:email,
        tel:tel,
        photo:photo
        }));
        setShow(false);  
}
const handleClose = () => setShow(false);
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Add Teacher
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Nom</label>
                <input {...register("nameRequired", { required: true })} onChange={ (event) => setName(event.target.value) }  type="text" className="form-control" required="" value={name} />
            </div>
            
            {errors.nameRequired && <span>This field is required</span>}
            <div className="form-group">
                <label>Email</label>
                <input {...register("emailRequired", { required: true })} onChange={ (event) => setEmail(event.target.value) }  type="email" className="form-control" required="" value={email} />
            </div>
            {errors.emailRequired && <span>This field is required</span>}
            <div className="form-group">
                <label>Tel</label>
                <input {...register("telRequired", { required: true })} onChange={ (event) => setTel(event.target.value) }  type="text" className="form-control" required="" value={tel} />
            </div>
            {errors.telRequired && <span>This field is required</span>}
           
            <div className="form-group">
                <label>Photo</label>
                <input onChange={ (event) => setPhoto(event.target.value) }  type="text" className="form-control" required="" value={photo} />
            </div>
            <input type="submit" value="Add" />
        </form>
          </Modal.Body>
          <Modal.Footer>
         
          </Modal.Footer>
        </Modal>
      </>
    );

}
