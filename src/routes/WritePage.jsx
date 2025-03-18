import { useUser } from '@clerk/clerk-react'
import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function WritePage() {

  const {isLoaded , isSignedIn} = useUser();

  if(!isLoaded){
    return <div className=''>Loading....</div>
  }

  // if(!isSignedIn){
  //   return <div className=''>You should login!</div>
  // }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
        <h1>Create a New Post</h1>
        <form action="" className='flex flex-col gap-6 flex-1'>
            <button className='p-2 w-max shadow-md rounded-xl text-sm text-gray-500 bg-white'>Add a cover image</button>
            <input type="text" className='text-4xl font-semibold bg-transparent outline-none' placeholder='My Awesome Story' />
            <div className="flex items-center gap-4">
              <label htmlFor="" className='text-sm'>Choose a categoryy:</label>
              <select name='cat' className='p-2 rounded-xl bg-white shadow-md' id=''>
                  <option value="general">General</option>
                  <option value="web-design">Web Design</option>
                  <option value="development">Development</option>
                  <option value="databases">Databases</option>
                  <option value="seo">Search Engines</option>
                  <option value="marketing">Marketing</option>
              </select>
            </div>
            <textarea name="desc" className='p-4 rounded-xl bg-white shadow-md' placeholder='A short description' />
            <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-md' />
            <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Send</button>
        </form>
    </div>
  )
}
