import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

const styles = {
  foot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    color: "crimson",
    fontSize: "4rem",
  },
  icon2: {
    color: "deepskyblue",
    fontSize: "4rem",
  },
  copy: {
    fontSize: '10px',

  }
};

export default function Footer() {
  return (
    <footer style={styles.foot}>
      <div>
        <a style={styles.icon} href="https://github.com/LeeNorrell">
          <FaGithubSquare />
        </a>

        <a
          style={styles.icon2}
          href="https://stackoverflow.com/users/24171456/lee-norrell"
        >
          <ImStackoverflow />
        </a>
      </div>
      <div>
        <p style={styles.copy}>Copyright Lee Norrell</p>
      </div>
    </footer>
  );
}
