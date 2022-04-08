import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import style from "./home.module.css";
import image_1 from "../../../images/hero.png";

function Home() {
  const navigate = useNavigate();

  const navigateTo = (e) => {
    e.preventDefault();
    navigate("/operations");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.container}>
        <div className={style.left_section}>
          <h1 className={style.title}>
            The modern <span className={style.hightlight}>banking</span> system{" "}
            <br />
            <span className={style.hightlight}>manufactures</span>
          </h1>
          <p className={style.sub_title}>
            A simpler banking experience for a simpler life.
          </p>
          <p className={style.link} onClick={navigateTo}>
            Learn more
          </p>
        </div>

        <div className={style.right_section}>
          <img src={image_1} className={style.image} />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
