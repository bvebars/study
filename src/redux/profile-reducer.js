import usersAPI, {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, how are yuo', likesCount: 25},
        {id: 1, message: 'Hello, how are yuo', likesCount: 25},
        {id: 2, message: 'Great', likesCount: 15},
        {id: 2, message: 'Great', likesCount: 15},
        {id: 2, message: 'Great', likesCount: 20},
        {id: 2, message: 'ваав', likesCount: 47}
    ],
    newPostText: 'Kamasutra',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTestActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserStatus = (status) => ({type: SET_STATUS, status});
//thunk

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
};

export default profileReducer