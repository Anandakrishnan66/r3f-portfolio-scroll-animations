import React from 'react'

function Layout(props) {
    const {children}=props;
  return (
    <div className='w-screen h-screen bg-red'>
          {children}
    </div>
  )
}

export default Layout