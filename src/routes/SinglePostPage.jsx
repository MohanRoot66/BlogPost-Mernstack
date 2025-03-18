import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../components/Image"
import PostMenuAction from '../components/PostMenuAction'
import Search from '../components/Search'
import Comments from '../components/Comments'

export default function SinglePostPage() {
  return (
    <div className='flex flex-col gap-8'>
      {/* Details */}
      <div className="flex gap-8">
          <div className="lg:w-3/5 flex flex-col gap-8">
              <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, corporis.</h1>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className='text-blue-500'>Jhon Doe</Link>
                <span>on</span>
                <Link>Web Design</Link>
                <span>2 days ago</span>
              </div>
              <p className='text-gray-500 font-medium'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias alias, aut autem, 
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati libero temporibus neque eligendi ducimus id laborum.
                Enim aliquam, in porro beatae omnis fugiat, aut praesentium animi, ex ducimus temporibus.
                eius ab vel nesciunt nisi, obcaecati laboriosam corporis dolorum facere enim possimus eligendi quia sint magni iusto.
              </p>
          </div>
          <div className="hidden lg:block w-2/5">
              <Image src="postImg.jpeg" w="600" className="rounded-2xl"/>
          </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
          {/* text */}
          <div className="lg:text-lg flex flex-col gap-6 text-justify">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            deserunt esse beatae magnam error fuga sed ab deleniti quibusdam, 
            recusandae laboriosam atque. Numquam veniam laborum ex quae nihil, 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            Rerum blanditiis fugit sunt dolore cumque.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            deserunt esse beatae magnam error fuga sed ab deleniti quibusdam, 
            recusandae laboriosam atque. Numquam veniam laborum ex quae nihil, 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            Rerum blanditiis fugit sunt dolore cumque.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            deserunt esse beatae magnam error fuga sed ab deleniti quibusdam, 
            recusandae laboriosam atque. Numquam veniam laborum ex quae nihil, 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            sit rerum asperiores quo corporis dicta, cumque eveniet nisi 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            praesentium minima! Id eligendi libero nisi quo quod consequuntur? 
            Rerum blanditiis fugit sunt dolore cumque.
            </p>
          </div> 
          {/* menu */}
          <div className="px-4 h-max sticky top-8">
              <h1  className='mb-4 text-sm font-medium'>Author</h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                  <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"/>
                  <Link className='text-blue-800'>Jhon Doe</Link>
                </div>
                  <p className='text-sm text-gray-500 '>Lorem ipsum dolor sit amet.</p>
                  <div className="flex gap-2">
                    <Link>
                      <Image src={"facebook.svg"} />
                    </Link>
                    <Link>
                      <Image src={"instagram.svg"} />
                    </Link>
                  </div>
              </div>
              <PostMenuAction />
              <h1  className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
              <div className="flex flex-col gap-2 text-sm">
                <Link className='underline'>All</Link>
                <Link className='underline'>Web Design</Link>
                <Link className='underline'>Development</Link>
                <Link className='underline'>Databases</Link>
                <Link className='underline'>Search Engines</Link>
                <Link className='underline'>Marketing</Link>
              </div>
              <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
              <Search />
          </div>
      </div>
        <Comments />
    </div>
  )
}
