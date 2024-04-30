import React, { useEffect, useRef, useState } from "react";
import "./Center_Left.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  clearProfileError,
  getProfileAction,
} from "../../../action/UserActions";
import { createCoverImageAction } from "../../../action/PostActions";
function Center_Left() {
  const coverRef = useRef();
  const [cover_image, setCover] = useState("");
  const alert = useAlert();
  const dispatch = useDispatch();
  const { lodding, error, profile } = useSelector(
    (state) => state.singleProfile
  );
  const { user } = useSelector((state) => state.userLogin.userInfo);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearProfileError());
    }
    dispatch(getProfileAction());
  }, [error, alert, dispatch]);

  function coverImageHandler() {
    const myFrom = new FormData();
    myFrom.set("cover_image", cover_image);
    dispatch(createCoverImageAction(myFrom));
  }
  return (
    <div className="Center-Container">
      <div className="image-section">
        <div className="cover-image-input-item" style={{ display: "none" }}>
          <input
            onChange={(e) => setCover(e.target.files[0])}
            ref={coverRef}
            type="file"
            className="cover-image-input"
          />
        </div>
        {cover_image && (
          <div className="cover-image-show-section">
            <div>
              <p onClick={(e) => (cover_image ? setCover(null) : "")}>x</p>
              <img
                className="cover-image-show"
                src={cover_image && URL.createObjectURL(cover_image)}
              />
            </div>
          </div>
        )}
        {profile && profile.user === user._id ? (
          <p className="cover-images">
            {cover_image ? (
              <AddCircleOutlineIcon onClick={coverImageHandler} />
            ) : (
              <AddPhotoAlternateIcon
                onClick={(e) => coverRef.current.click()}
                className="cover-image-icon"
              />
            )}
          </p>
        ) : null}

        <img
          className="cover-image"
          src={`../posts/${profile && profile.cover_image}`}
          alt={profile && profile._id}
        />
        <Link className="a" to={`/profile/${profile && profile._id}`}>
          {" "}
          <img
            className="user-image"
            src={`../profiles/${profile && profile.avatar}`}
          />
        </Link>
        <div className="name-section">
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${profile && profile._id}`}
          >
            <span>@ {profile && profile.username}</span>
          </Link>
          <p>###Software Engineer</p>
        </div>
      </div>
      <div className="follow">
        <div className="follow-section">
          <div className="follows">
            <span>{profile && profile.followers.length} k</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Follower
            </span>
          </div>
          <div className="v1"></div>
          <div className="following">
            <span>{profile && profile.following.length} k</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Following
            </span>
          </div>
          <div className="v1"></div>
          <div className="posts">
            <span>{profile && profile.posts.length} </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Posts{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center_Left;
