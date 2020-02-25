import React from "react";
import CSS from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTest(text)
    };

    return (
        <div>
            <div className={CSS.postBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText}
                                  onChange={onPostChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddPost}>add post</button>
                    </div>
                </div>
                <div className={CSS.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
};

export default MyPosts;