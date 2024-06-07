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
    justifyContent: 'center',
    flexDirection: 'column'
  }
}
const data = [
  {
    id: 1,
    name: 'project one',
    image: {Image}
  },
  {
    id: 2,
    name: 'project one',
    image: {Image}
  },
  {
    id: 3,
    name: 'project one',
    image: {Image}
  },
  {
    id: 4,
    name: 'project one',
    image: {Image}
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
