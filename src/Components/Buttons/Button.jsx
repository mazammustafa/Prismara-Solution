import React from 'react'
import { Link } from 'react-router-dom'

const BtnPrimary = ({btnText}) => {
  return (
    <Link className='btn-primary'>{btnText}</Link>
  )
}

const BtnSecondary = ({btnText}) => {
  return (
    <Link className='btn-secondary'>{btnText}</Link>
  )
}

export  {BtnPrimary, BtnSecondary}
