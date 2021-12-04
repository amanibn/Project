import { ADD_TEACHER,REMOVE_TEACHER,EDIT_TEACHER, ADD_TEXT, EDIT_ADD_TEACHER, ADD_CLASS, ADD_MEETING} from "../Actions/actions-types";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    teachers: [
        {
            id: uuidv4(),
            name: 'my first Teacher',
            tel: '0123456789',
            email:'test@test.com',
            photo:'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg'
        },
        {
            id: uuidv4(),
            name: 'my second Teacher',
            tel: '203154896',
            email:'teacher@test.com',
            photo:'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg'

        },
        {
            id: uuidv4(),
            name: 'my third Teacher',
            tel: '154203658',
            email:'prof@test.com',
            photo:'https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg'

        }
    ],text: "",
    selected: 0,
    classes:[
        {
            id: uuidv4(),
            teacher:'MR X',
            libclass:'3eme',
            subject:'FR'

        }
    ],
    events : [
        { 
            id: uuidv4(), 
            start: '2021-12-03 18:00:00', 
            end: '2021-12-03 19:30:00', 
            allDay: false, 
            title: 'Meeting 1' 
        },
        { 
            id: uuidv4(), 
            start: '2021-12-04 17:01:00',
            end: '2021-12-05 17:01:00',  
            allDay: true, 
            title: 'Meeting 2' 
        },
    ]
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEACHER:
            return {
                teachers: [...state.teachers, action.payload],text:''
                
            }
           

            case EDIT_TEACHER:

                return {
                    ...state,
                    selected: action.payload
                };
    
            case REMOVE_TEACHER:
                return {
                    ...state,
                    teachers: state.teachers.filter(teacher => {
                        if(action.payload == '')
                        return state.teachers
                        else
                        return teacher.id !== action.payload;
    
                    })
                  
                }
            case ADD_TEXT:
      return {
           ...state, text: action.payload 
        };


                case EDIT_ADD_TEACHER:
                console.log(action.payload)
                const teacher = state.teachers.map((teacher, i) =>{
                console.log(state.selected);
                return teacher.id !== state.selected ? teacher : action.payload
                }
                );
                return {
                  ...state,
                  teachers: teacher,
                  selected: undefined,
                  text: ""
                };
                case ADD_CLASS:
                    console.log([...state.classes, action.payload])
                    return {
                        classes: [...state.classes, action.payload]
                        
                    }
                    case ADD_MEETING:
                        console.log([...state.events, action.payload])
                        return {
                            events: [...state.events, action.payload]
                            
                        }
                   
        default:
            return state
    }
}

export default rootReducer