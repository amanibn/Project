import AddTeacher from "./AddTeacher";
import {useState, useEffect} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {editTeacher, RemoveTeacher, editAddTeacher} from "../Actions/actions";
import TablePro from 'react-bootstrap-table-pro';
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
export default function Teachers(){
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();
    const teachers = useSelector(state => state.teachers);

    var data = Object.assign({}, teachers);

    const handelEdit = (teacher) =>{
       dispatch(editTeacher(teacher.id));
        setShow(true)
        setName(teacher.name);
        setTel(teacher.tel);
        setEmail(teacher.email);
        setPhoto(teacher.photo);

    }
    const handelRemove = (ID) =>{
        dispatch(RemoveTeacher(ID));
         
 
     }
    const handleClose = () => setShow(false);
    const handleSubmit = (e) => {
       
        e.preventDefault()
    dispatch(editAddTeacher(
        {//id:t.id,
        name:name,
        email:email,
        tel:tel,
        photo:photo
        }));
        setShow(false);
}
  
    return(
        <>
         <div className="container">
    <h1>Teachers</h1>


    <AddTeacher />
    <div className='row'>
        <div className='col-md-12'>
          <div className='table-responsive'>
           
            <TablePro
              pageSize={10} 
              keys={ 
                {
                    photo: { 
                        label: 'photo', // name to print in table header.
                        searchAs:(k,a)=>{
                            console.log(data[k]) // function used to get searchable value. k: row ID, a: value. -> (a === data[k].name).
                          return a;
                        },
                        renderAs:(k,a)=>{ // function used to get printable value. k: row ID, a: value. -> (a === data[k].name).
                          return(
                            // <a href={`/clients/${k}`}>{a}</a>
                            <img id="image" src={a !=='' ? a : 'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg'} />
    
                          );
                        }
                      },name: { 
                    label: 'name', // name to print in table header.
                    searchAs:(k,a)=>{ // function used to get searchable value. k: row ID, a: value. -> (a === data[k].name).
                      return a;
                    },
                    renderAs:(k,a)=>{ // function used to get printable value. k: row ID, a: value. -> (a === data[k].name).
                      return(
                        // <a href={`/clients/${k}`}>{a}</a>
                        <span  >{a}</span>

                      );
                    }
                  },
                  email: {
                    label: 'email',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <span>{a}</span>
                        </div>
                      );
                    }
                  }, tel: {
                    label: 'tel',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <span>{a}</span>
                        </div>
                      );
                    }
                  }, id: {
                    label: 'Actions',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                            <span> <FaEdit onClick={() =>handelEdit(data[k]) } /></span>
                        <span> <FaTrash onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Teacher?"
    )
    if (confirmBox === true) {
        handelRemove(data[k].id)
    }
  }}  /> </span>
                        
                        
                        </div>
                      );
                    }
                  }
                }
              }
              data={data} />
          </div>
        </div>
      </div>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form >
            <div className="form-group">
                <label>Nom</label>
                <input onChange={ (event) => setName(event.target.value) }  type="text" className="form-control" required="" value={name} />
            </div>
            
           
            <div className="form-group">
                <label>Email</label>
                <input onChange={ (event) => setEmail(event.target.value) }  type="email" className="form-control" required="" value={email} />
            </div>
            <div className="form-group">
                <label>Tel</label>
                <input onChange={ (event) => setTel(event.target.value) }  type="text" className="form-control" required="" value={tel} />
            </div>
            
           
            <div className="form-group">
                <label>Photo</label>
                <input onChange={ (event) => setPhoto(event.target.value) }  type="text" className="form-control" required="" value={photo} />
            </div>
        </form>
          </Modal.Body>
          <Modal.Footer>
          <input onClick={handleSubmit}  type="submit" value="Add" />
          </Modal.Footer>
        </Modal>
    </>
    );
}