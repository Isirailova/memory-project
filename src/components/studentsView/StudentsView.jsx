import React from "react";
import { studentList } from "../../assets/data/studentsList";
import ProfileCard from "../profileCard/ProfileCard";

import "./studentsView.style.css";

const StudentsView = () => {
  return (
    <div className="students-container">
      {studentList.map((el, index) => (
        <ProfileCard
          key={index}
          firstName={el.firstName}
          job={el.job}
          favoriteColors={el.favoriteColors}
          imgSrc={el.imgSrc}
          gender={el.gender}
        />
      ))}
    </div>
  );
};

export default StudentsView;
