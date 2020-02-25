import profileReducer from './profile-reducer'
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, how are yuo', likesCount: 25},
                {id: 1, message: 'Hello, how are yuo', likesCount: 25},
                {id: 2, message: 'Great', likesCount: 15},
                {id: 2, message: 'Great', likesCount: 15},
                {id: 2, message: 'Great', likesCount: 20},
                {id: 2, message: 'ваав', likesCount: 47}
            ],
            newPostText: 'Kamasutra'
        },
        dialogsPage: {
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
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State is changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
};

export default store