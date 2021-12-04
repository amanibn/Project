import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router-dom';
import TablePro from 'react-bootstrap-table-pro';
import data from '../students.json'
function Students () {
  const obj = Object.assign({}, data);
console.log(obj)
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='table-responsive'>
          
            <TablePro
              pageSize={10} 
              keys={ 
                {
                  name: { 
                    label: 'Name', // name to print in table header.
                    searchAs:(k,a)=>{ // function used to get searchable value. k: row ID, a: value. -> (a === data[k].name).
                      return a;
                    },
                    renderAs:(k,a)=>{ // function used to get printable value. k: row ID, a: value. -> (a === data[k].name).
                      return(
                        // <a href={`/clients/${k}`}>{a}</a>
                        <Link img={data[k].img} to={`/profile/${k}`} >{a}</Link>

                      );
                    }
                  },
                  email: {
                    label: 'Email',
                  },
                  created_at: {
                    label: 'Created',
                    renderAs:(k,a)=>(new Date(a)).toDateString(),
                    searchAs:(k,a)=>{
                      return a;
                    },
                  },
                  status: {
                    label: 'Status',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <strong>{a}</strong>
                        </div>
                      );
                    }
                  },
                }
              }
              data={Object.assign({}, data)}/>
          </div>
        </div>
      </div>
    );
            }

export default Students