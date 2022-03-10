import React from 'react'

type MainWrapperProps = {
  children?: React.ReactNode
}

const MainWrapper = ({ children } : MainWrapperProps) => {
  return (
    <div className='absolute'>
      {children}
    </div>
  )
}

export default MainWrapper
