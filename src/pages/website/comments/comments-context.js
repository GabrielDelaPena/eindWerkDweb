import { React, createContext, useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const CommentContext = createContext();

export const CommentContextProvider = (props) => {
  // const [comments, setComments] = useState([
  //   {
  //     id: 1,
  //     index: 0,
  //     title: "Great User Interface!!",
  //     comment:
  //       "Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot  wat het tot min of meer leesbaar nederlands maakt",
  //     user: "Hans Vandepoel",
  //   },
  //   {
  //     id: 2,
  //     index: 1,
  //     title: "Easy to use and lovely visual!!",
  //     comment:
  //       "Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm, door ingevoegde humor of willekeurig gekozen woorden die nog niet half geloofwaardig ogen. Als u een passage uit Lorum Ipsum",
  //     user: "Jan Van Delm",
  //   },
  //   {
  //     id: 3,
  //     index: 2,
  //     title: "Best banking app!!",
  //     comment:
  //       "In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud.",
  //     user: "Patrick Star",
  //   },
  // ]);
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
    console.log("comment");
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
