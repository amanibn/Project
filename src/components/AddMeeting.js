import { useState, useEffect } from "react";
import { addMeeting } from "../Actions/actions";
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';
import { format } from 'date-fns';
import { v4 as uuidv4 } from "uuid";
import 'react-datetime-picker/dist/DateTimePicker.css';
export default function AddMeeting(){
    const [show, setShow] = useState(false);
    //const [start, setStart] = useState();
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [allDay, setAllDay] = useState();
    const [title, setTitle] = useState();
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const meetings = useSelector(state => state.events);
    const handleSubmit = (e) => {
        e.preventDefault()  
        dispatch(addMeeting(
        {id:uuidv4(),
        start:format(start, 'yyyy-MM-dd kk:mm:ss'),
        end:format(end, 'yyyy-MM-dd kk:mm:ss'),
        allDay:false,
        title:title
        }));
        setShow(false); 
    console.log(console.log(format(start, 'yyyy/MM/dd kk:mm:ss'))) 
}

useEffect(() => {
    console.log(meetings) 
  });
  const handleClose = () => setShow(false);
    return(
        <>
        <div
          className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Add Meeting
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form >
            <div className="form-group">
                <label>Title</label>
<input className="form-control" onChange={ (event) => setTitle(event.target.value) }></input>            
                    </div>
            <div className="form-group">
                <label>Start</label>
                <DateTimePicker 
        onChange={setStart}
        value={start}
      />          
            </div>
            <div className="form-group">
                <label>End</label>
                <DateTimePicker 
        onChange={setEnd}
        value={end}
      />          
            </div>
        </form>
          </Modal.Body>
          <Modal.Footer>
          <input className="btn btn-primary" onClick={handleSubmit} type="submit" value="Add" />
          </Modal.Footer>
        </Modal>
      </>

    )
}