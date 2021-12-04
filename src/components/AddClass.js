import { useState, useEffect } from "react";
import { addClass } from "../Actions/actions";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function AddClass(){
    const [show, setShow] = useState(false);
    const [teacher, setTeacher] = useState();
    const [libclass, setLibclass] = useState();
    const [subject, setSubject] = useState();
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const classes = useSelector(state => state.classes);
    const teachers = useSelector(state => state.teachers);
    console.log(teachers)
    const handleSubmit = (e) => {
        e.preventDefault()  
        dispatch(addClass(
        {id:uuidv4(),
        teacher:teacher,
        libclass:libclass,
        subject:subject
        }));
        setShow(false);  
}

  const handleClose = () => setShow(false);
    return(
        <>
        <div
          className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Add class
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form >
            <div className="form-group">
                <label>Teacher</label>
                <select onChange={ (event) => setTeacher(event.target.value) } value={teacher} className="form-control" id="teacher">
               
                {
                   // if(teachers.length > 0){
                        teachers && teachers.map((t, i) => (
               <option value={t.name} key={i}>{t.name}</option>
                ))
                   // }
                
                }
                    
                    </select>             
                    </div>
            <div className="form-group">
                <label>class</label>
                <select onChange={ (event) => setLibclass(event.target.value) } value={libclass} className="form-control" id="libclass">
                    <option value="1 ere">1 ere</option>
                    <option value="2 ere">2 eme</option>
                    <option value="3 ere">3 eme</option>
                    <option value = "4 ere">4 eme</option>
                    <option value="5 ere">5 eme</option>
                    </select>            
            </div>
            <div className="form-group">
                <label>Subject</label>
                <select onChange={ (event) => setSubject(event.target.value) } value={subject} className="form-control" id="subject">
                    <option value="FR">FR</option>
                    <option value="Math">Math</option>
                    <option value="Arabic">Arabic</option>
                    <option value="En">En</option>
                    <option value="ph">ph</option>
                    </select> 
            </div>
        </form>
          </Modal.Body>
          <Modal.Footer>
          <input onClick={handleSubmit} type="submit" value="Add" />
          </Modal.Footer>
        </Modal>
      </>

    )
}