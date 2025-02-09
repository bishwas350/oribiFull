import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={`py-[12px] px-[30px] bg-black text-white text-sm ${className}`}>{badgeText}</div>
  )
}

export default Badge