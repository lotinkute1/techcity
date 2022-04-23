import React, { useEffect, useState } from "react";
import userApi from "../../../api/userApi";

export default function Comment({ content="", create_date="", starts=0, user_id="",currentUser={}}) {
  const [user,setUser] = useState(null);

  const getUser = async () => {
    if(!currentUser 
    && !(Object.keys(currentUser).length === 0)
    && !(Object.getPrototypeOf(currentUser) === Object.prototype)) return;
    try {
      const response = await userApi.getUserById(user_id);
      const {data}= response;
      setUser(data);
    } catch (err) {
      console.log('Fail to get api user by id')
    }
  };
  const renderStarts=() =>{
    const temp =Array.from(Array(Number(starts)).keys());
    return temp.map((start, index)=>(
        <i key={index} className="fas fa-star" />
    ))

  }

  useEffect(()=>{
    if(user_id) getUser();
  },[])

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
          src={currentUser.ava||user?.ava}
          alt=""
        />
      </div>
      <div className="comment__main">
        <div className="comment__name">{currentUser.name||user?.name}</div>
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
