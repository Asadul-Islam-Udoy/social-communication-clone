import React, { useEffect, useRef } from "react";
import "./M_Center.css";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
function Chats() {
  const messageRef = useRef();
  const { user } = useSelector((state) => state.userLogin.userInfo);
  const { lodding, error, userMessages } = useSelector(
    (state) => state.getMessages
  );

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages]);
  return (
    <>
      {userMessages?.map((message) => (
        <div ref={messageRef}>
          <div
            className={
              message.senderId.includes(user._id)
                ? "chats__Container own "
                : " chats__Container"
            }
          >
            <img
              className={
                message.senderId.includes(user._id)
                  ? "user__image iown"
                  : "user__image"
              }
              src="https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg"
            />
            <span
              className={
                message.senderId.includes(user._id)
                  ? "time__section iowns"
                  : " time__section"
              }
            >
              {format(message.createdAt)}
            </span>
            <p
              style={{
                textAlign: message.senderId.includes(user._id)
                  ? "right"
                  : "left",
              }}
              id={!message.senderId.includes(user._id) ? "" : "iownmessage"}
            >
              {message?.text}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Chats;
