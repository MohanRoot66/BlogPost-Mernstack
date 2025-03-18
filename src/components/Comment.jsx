import React from 'react'
import Image from './Image'

export default function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
            <span className='font-medium'>Jhon Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam aspernatur quisquam veritatis voluptatibus, et inventore deleniti
                 natus nihil porro maiores accusamus nostrum in quo, fugit nobis odit ipsam aliquid, 
                 iste corrupti dicta! Quis aspernatur totam, fuga sit natus magnam non quod veniam 
                quia tempore facilis provident error illum recusandae.
            </p>
        </div>
    </div>
  )
}
