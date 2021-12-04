import { ADD_TEACHER,EDIT_TEACHER,REMOVE_TEACHER, ADD_TEXT, EDIT_ADD_TEACHER,ADD_CLASS, ADD_MEETING } from "./actions-types";
//import { ADD_CLASS } from "./actions-types";
export const addTeacher = newTeacher => {
    return {
        type: ADD_TEACHER,
        payload: newTeacher
    }
}


  export const editTeacher = key => ({
    type: EDIT_TEACHER,
    payload: key
  });

  export const RemoveTeacher = TeacherID => ({
    type: REMOVE_TEACHER,
    payload: TeacherID
  });

  export const addText = value => ({
    type: ADD_TEXT,
    payload: value
  });

  export const editAddTeacher = obj => ({
    type: EDIT_ADD_TEACHER,
    payload: obj
  });
  export const addClass = obj => ({
    type: ADD_CLASS,
    payload: obj
  });
  export const addMeeting = newMeeting => {
    return {
        type: ADD_MEETING,
        payload: newMeeting
    }
}

