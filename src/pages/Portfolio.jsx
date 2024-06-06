import React from 'react'
import Project from '../components/Project'
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

// display 6 projects using one component
const data = [
  {
    name: 'project one',
    image: ''
  },
  {
    name: 'project two',
    image: ''
  }
]

export default function Portfolio() {
  return (
    <div>
     {data.map((x)=> (
      <Project data={x} />
     ))}
    </div>
  )
}
