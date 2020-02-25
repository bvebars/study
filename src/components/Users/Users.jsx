import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    console.log(props)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page && style.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(page)
                              }}
                        >{page}</span>
                    )
                })}
            </div>
            <div>
                {props.users.map(user =>
                    <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src="https://a.wattpad.com/cover/84608722-352-k886345.jpg" alt="" style={{width: 70}}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                     <span>
                         <div>{user.name}</div>
                         <div>{user.status}</div>
                     </span>
                     <span>
                         {/*<div>{user.location.country}</div>*/}
                         {/*<div>{user.location.city}</div>*/}
                     </span>
                    </span>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Users