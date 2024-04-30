import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FollowUserAction } from "../../../action/UserActions";
function Users({ person }) {
  const { user } = useSelector((state) => state.userLogin.userInfo);
  const [following, setFollowing] = useState(
    person.following.includes(user._id)
  );
  console.log(following);
  const dispatch = useDispatch();

  const followHandler = (id) => {
    dispatch(FollowUserAction(id));
    setFollowing((pre) => !pre);
  };
  return (
    <div className="f-users-section">
      <div className="f-users">
        <Link style={{ TextDecoder: "none" }} to={`/profile/${person._id}`}>
          <img className="f-image" src={`../profiles/${person.avatar}`} />
        </Link>
        <div className="f-name">
          <span>@{person.username}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <div>
        <button
          className="f-button"
          onClick={(e) => followHandler(person.user)}
        >
          {following ? "unfollow" : "follow"}
        </button>
      </div>
    </div>
  );
}
export default Users;
