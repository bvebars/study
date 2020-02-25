const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Саша'},
        {id: 4, name: 'Вася'},
        {id: 5, name: 'Кася'},
        {id: 6, name: 'Уярик'}
    ],
    messages: [
        {id: 1, message: 'hy'},
        {id: 2, message: 'hello'},
        {id: 3, message: 'byby'},
        {id: 4, message: 'wow'},
        {id: 5, message: 'wow'},
    ],
    newMessageText: 'new message'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: text}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state
    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer