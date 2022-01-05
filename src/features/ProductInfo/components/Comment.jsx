import React, { useEffect } from "react";
import GetUsersData from "../../../api/GetUsersData";

export default function Comment({ content="", create_date="", starts="", user_id="" }) {

  const user = GetUsersData(user_id);

  const renderStarts=() =>{
    const temp =Array.from(Array(starts).keys());
    return temp.map((start, index)=>(
        <i key={index} className="fas fa-star" />
    ))

  }
  // change like color
  useEffect(() => {
    const likeBtns = document.querySelectorAll(".btn-like");
    const likeCount = document.querySelectorAll(
      ".comment__actions__like-count"
    );
    if(likeBtns&&likeCount){

        likeBtns.forEach((likeBtn, index) => {
          likeBtn.onclick = (e) => {
            e.target.closest(".btn-like").classList.toggle("active");
            if (e.target.closest(".btn-like").classList.contains("active"))
              likeCount[index].value -= 1;
            else likeCount[index].value += 1;
          };
        });
    }

    
  },[]);
  return (
    <div className="comments__comment">
      <div className="comment__ava">
        <img
          src={user[0]?.user_ava}
          alt=""
        />
      </div>
      <div className="comment__main">
        <div className="comment__name">{user[0]?.name}</div>
        <div className="raiting-starts">
          {renderStarts()}
        </div>
        <div className="comment__content">{content}</div>
        <div className="comment__time">{create_date}</div>
        <div className="comment__actions">
          <div className="btn btn-like">
            <i className="fas fa-thumbs-up" />
          </div>
          <div className="comment__actions__like-count">0</div>
        </div>
      </div>
    </div>
  );
}
