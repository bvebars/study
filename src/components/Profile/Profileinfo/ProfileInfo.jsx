import React from "react";
import CSS from './Profileinfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src="https://i1.wp.com/www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg"
                 alt=""/>
            <div className={CSS.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                ava = disc
                hello
            </div>
        </div>

    )
};

export default ProfileInfo;