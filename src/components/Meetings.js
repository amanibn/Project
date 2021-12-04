import AddMeeting from './AddMeeting';
import TablePro from 'react-bootstrap-table-pro';
import {useSelector } from 'react-redux';
export default function Meetings(){
    const data = useSelector(state => state.events);

    return(
        <>
        <h1>Classes</h1>
        <AddMeeting />
        <div className='row'>
        <div className='col-md-12'>
          <div className='table-responsive'>
          
            <TablePro
              pageSize={10} 
              keys={ 
                {
                    title: { 
                    label: 'Title', // name to print in table header.
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
                  start: {
                    label: 'Start',
                    renderAs:(k,a)=>{
                      return(
                        <div className="float-right">
                          <span>{a}</span>
                        </div>
                      );
                    }
                  },end: {
                    label: 'end',
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