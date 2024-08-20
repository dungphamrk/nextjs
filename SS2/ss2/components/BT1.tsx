import React from 'react'
import {  faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function BT1() {
  return (
    <div className='flex flex-col w-1/5'>
        <a href="" className='text-blue-600'>Label</a>
        <div className='relative flex '>
            <input type="text" className='rounded-md border-2 p-1 pl-2  border-blue-600' placeholder='Placeholder'/>
            <FontAwesomeIcon className='h-5  absolute right-12 top-2 ' icon={faEye} />
        </div>
     
        <p>Helper text</p>
    </div>
  )
}
