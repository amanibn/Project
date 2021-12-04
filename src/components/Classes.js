import AddClass from "./AddClass";
import TablePro from 'react-bootstrap-table-pro';
import { useDispatch, useSelector } from 'react-redux';
import { addClass } from "../Actions/actions";
export default function Classes(){
    const data = useSelector(state => state.classes);

    return(
        <>
        <h1>Classes</h1>
        <AddClass />
        <div className='row'>
        <div className='col-md-12'>
          <div className='table-responsive'>
           
            <TablePro
              pageSize={10} 
              keys={ 
                {
                    teacher: { 
                    label: 'teacher', // name to print in table header.
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
                  libclass: {
                    label: 'libclass',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <span>{a}</span>
                        </div>
                      );
                    }
                  },subject: {
                    label: 'subject',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <span>{a}</span>
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
        </>
    )
}