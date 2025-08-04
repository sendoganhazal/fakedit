import React from 'react'
import { Post } from '@/types'
import AllPosts from './AllPosts';

interface HomeProps {
    data:Post[]
}

const HomeComp:React.FC<HomeProps>= ({data}) => {
  return (
    <AllPosts data={data}/>
  )
}

export default HomeComp