import React from 'react';

import { fetchAllPost } from '@/utils/api-fetcher'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import HomeComp from '@/components/HomeComp';


async function getAllPosts() {
   const post = await fetchAllPost();
   return post;
}

export default async function Home() {
  const all_posts = await getAllPosts();
  console.log(all_posts);
  return (
    <div>
      <HomeComp data={all_posts}/>
    </div>
  );
}
