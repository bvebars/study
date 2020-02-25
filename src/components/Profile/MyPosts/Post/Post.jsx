import React from "react";
import CSS from './Post.module.css'

const Post = (props) => {
    return (
        <div className={CSS.item}>
            <img src="https://banana.by/uploads/thumbs/267/266083.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>

        </div>
    )
};

export default Post;