import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
        <div>
            <a href="https://github.com/LeeNorrell"><FaGithubSquare /></a>
        </div>
        <div>
            <a href="https://stackoverflow.com/users/24171456/lee-norrell"><ImStackoverflow /></a>
        </div>
    </footer>
  )
}
