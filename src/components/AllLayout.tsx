import React from 'react'
import "../sass/layout/_allLayout.scss"

const AllLayout = ({ children }: any) => {
  return (
    <div className='all-layout'>
      {children}
    </div>
  )
}

export default AllLayout