"use client"
import React, { useState, useEffect } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Skeleton, Button } from 'antd';
import { Post } from '@/types'
import Link from 'next/link';
import { fetchAllPost } from '@/utils/api-fetcher'

async function getAllPosts(limit: string) {
    const post = await fetchAllPost(limit);
    return post;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const PAGE_SIZE = 5;
const AllPosts: React.FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Post[]>([]);
    const [page, setPage] = useState(PAGE_SIZE);
    async function fetchData(limit: string) {
        const all_posts = await getAllPosts(limit);
        const results = Array.isArray(all_posts) ? all_posts : [];
        setInitLoading(false);
        setData(results);
    }
    useEffect(() => {

        fetchData(PAGE_SIZE.toString());
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        const nextPage = page + 5;
        setPage(nextPage);
        fetchData(nextPage.toString());
        console.log("onLoadMore")
    };
    const loadMore =
        (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button type='primary' onClick={onLoadMore}>loading more</Button>
            </div>
        );
    return (
        <div style={{ height: "93vh", overflowY: "auto" }}>
            <List
                itemLayout="vertical"
                size="large"

                loading={initLoading}
                loadMore={loadMore}
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
        </div>

    );
}

export default AllPosts;