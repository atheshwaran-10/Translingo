import {IconType} from 'react-icons'
import React from 'react'
interface AuthButtonProps{
  icon:IconType,
  onClick:()=>void;
}

export const AuthButton:React.FC<AuthButtonProps> = ({
  icon:Icon,
  onClick
}) => {
  return (
    <button
    onClick={onClick}
    type='button'
    className='
    inline-flex
    w-full
    justify-center
    rounded-md
    bg-white
    px-4
    py-2
    text-gray-500
    shadow-sm
    ring-1
    ring-inset
    ring-gray-300
    hover:bg-gray-50
    focus:outline-offset-0
    '
    >
      <Icon/>
    </button>
  )
}
