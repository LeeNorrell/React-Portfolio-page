import React from "react";
import profile from "../Images/profile.png";

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about the

export default function AboutMe() {
  return (
    <div>
      <img src={profile} alt="profile pic" />
      <p>
        {" "}
        Hello, My name is Lee Norrell.I live in Austin,Texas. I was working as a
        welder back in Alabama before I decided I wanted to try something
        different.
      </p>
    </div>
  );
}
