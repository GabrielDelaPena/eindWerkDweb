/* eslint-disable */
import { React, createContext, useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const CommentContext = createContext();

export const CommentContextProvider = (props) => {
  const [comments, setComments] = useState([]);
  const length = comments.length;
  const [current, setCurrent] = useState(0);
  const [updateComment, setUpdateComment] = useState(false);

  /** Refers to the database comments */
  const commentsCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
    console.log("comments updated");
  }, [updateComment]);

  const addComment = async (user, title, comment) => {
    await addDoc(commentsCollectionRef, {
      user: user,
      title: title,
      comment: comment,
    });
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const value = {
    comments: comments,
    setComments: setComments,

    updateComment: updateComment,
    setUpdateComment: setUpdateComment,

    nextSlide: nextSlide,
    prevSlide: prevSlide,

    length: length,
    current: current,

    addComment: addComment,
  };
  return (
    <CommentContext.Provider value={value}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
