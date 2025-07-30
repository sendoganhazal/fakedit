import React from 'react'

import { Typography } from 'antd';

export const { Title } = Typography;


interface TagListItemProps {
  tag_name: string[];
}

const TagListItem: React.FC<TagListItemProps> = ({tag_name}) => {
  return (
    <section>
     
        {
            tag_name?.map((name:string, key:number) => <h2 key={key}>{name}</h2>)
      
        }
    </section>
  )
}

export default TagListItem