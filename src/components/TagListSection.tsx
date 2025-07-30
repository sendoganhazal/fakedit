import React from 'react'
import { TagList } from '@/types'
import { Typography } from 'antd';
import TagListItem from './TagListItem';

export const { Title } = Typography;


interface TagListSectionProps {
  data: TagList[];
}

const TagListSection: React.FC<TagListSectionProps> = ({data}) => {
  const tag_name =  data.map(item => item.name);
  return (
    <section>
     
        <TagListItem tag_name={tag_name}/>
    </section>
  )
}

export default TagListSection;
