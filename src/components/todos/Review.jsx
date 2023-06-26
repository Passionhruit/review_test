import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../redux/modules/reviews";
import { useSelector } from "react-redux";

function Review() {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);

  const dispatch = useDispatch();
  return (
    <div>
      닉네임 :{" "}
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      내용 :{" "}
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          dispatch(addReview(user, comment));
        }}
      >
        등록하기
      </button>
      {reviews.map((review) => {
        return (
          <div>
            <h3>{review.user}</h3>
            <p>{review.comment}</p>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Review;
