import React from 'react'
import PostListItem from './PostListItem'

export default function PostList() {
  return (
    <div className='flex flex-col gap-8'>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
  )
}
