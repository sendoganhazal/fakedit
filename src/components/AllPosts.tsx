"use client"
import React, { useState, useEffect } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import { Post } from '@/types'
import Link from 'next/link';

interface AllPostsProps {
    data: Post[]
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const AllPosts: React.FC<AllPostsProps> = ({ data }) => {
    
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={data}
            renderItem={(item, key) => (
                <List.Item
                    key={key}
                    // actions={[
                    //     <IconText icon={LikeOutlined} text={item.rections.likes.toString()} key="list-vertical-like-o" />,
                    //     <IconText icon={MessageOutlined} text={item.views.toString()} key="list-vertical-message" />,
                    // ]}
                >
                    <List.Item.Meta

                        title={<Link href="/">{item.title}</Link>}
                    />
                    {item.body}
                </List.Item>
            )}
        />
    );
}

export default AllPosts;