const ADD_LIST = 'ADD_LIST';
type ADD_LIST = typeof ADD_LIST;

interface addListAction {
    type: ADD_LIST,
    list: {
        firstName: string,
        lastName:  string,
        occupation: string
    }
}

type Actions = addListAction;

export default Actions