import TagListSection from "@/components/TagListSection";
import { TagList } from '@/types'
import { fetchTagList } from '@/utils/api-fetcher'

async function getTagList() {
   const post = await fetchTagList();
   return post;
}
export default async function Home() {
  const tag_list_data = await getTagList();

  return (
    <div>
      <TagListSection data={tag_list_data}/>
    </div>
  );
}
