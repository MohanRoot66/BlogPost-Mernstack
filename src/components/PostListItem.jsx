import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

export default function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover" w={735}/>
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolores?</Link>
            <div className='flex items-center gap-2 text-gray-500 text-sm'>
                <span>Written by</span>
                <Link className='text-blue-800'>Jhon Doe</Link>
                <span>on</span>
                <Link className='text-blue-800'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Omnis eos deserunt voluptate iusto perspiciatis nihil nulla temporibus est 
                porro ipsum dicta necessitatibus fugit praesentium odit sed nostrum in odio 
                deserunt rem cumque velit ipsum voluptates esse voluptate enim!
            </p>
            <Link className='underline text-blue-500 text-sm mb-4' to="/test">Read more</Link>
        </div>
    </div>
  )
}
