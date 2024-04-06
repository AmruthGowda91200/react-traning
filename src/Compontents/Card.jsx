import React from 'react'

const Card = ({text,desc,value,hlink}) => {
  return (
    <div>
      <div>title:{text}</div>
      <div>desc:{desc}</div>
      <a href={hlink} target='_blank' rel="noreferrer">{value}</a>
    </div>
  )
}

export default Card
