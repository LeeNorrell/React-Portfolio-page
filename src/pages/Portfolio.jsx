import React from 'react';
import Project from '../components/Project';
import Image from "../Images/profile.png"
import { BsDisplay } from 'react-icons/bs';
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

// display 6 projects using one component
const styles = {
  bit: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

  }
}
const data = [
  {
    id: 1,
    name:<a href="https://github.com/LeeNorrell/ORM-E-commerce">ORM E-commerce Project</a> ,
    image: Image,
  },
  {
    id: 2,
    name: <a href="https://github.com/LeeNorrell/Employee-tracker">Employee Tracker Project</a>,
    image: Image,
  },
  {
    id: 3,
    name: <a href="https://github.com/LeeNorrell/Note-Taker">Note Taker Project</a>,
    image: Image,
  },
  {
    id: 4,
    name: <a href="https://github.com/LeeNorrell/Make-A-ReadMe">Making a ReadMe Project</a>,
    image: Image,
  },
  {
    id: 5,
    name: <a href="https://github.com/lazybeast904/Chismosa-s-podcast">Collaboration Project</a>,
    image: Image,
  },
  {
    id: 6,
    name:  <a href="https://github.com/LeeNorrell/NoSql-social-api">NoSql Project</a>,
    image: Image,
  },
]


export default function Portfolio() {
  return (
    <div style={styles.bit}>
     {data.map(data=> (
      <Project key={data.id} data={data} />
     ))}
    </div>
  )
}
