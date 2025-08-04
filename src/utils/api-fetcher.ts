import { Post, TagList } from "@/types";

const POST_BASE_URL = "https://dummyjson.com/posts";
const ALL_POST_URL = `${POST_BASE_URL}?limit=0`;
const SORT_BY_VIEWS = `${ALL_POST_URL}&sortBy=views&order=desc`;
const TAG_LIST_URL = 'https://dummyjson.com/posts/tags';
const POSTS_BY_TAG = 'https://dummyjson.com/posts/tag'
const USER_BASE_URL = 'https://dummyjson.com/users';
export async function fetchAllPost(): Promise<Post[]> {
  try {
    const response = await fetch(ALL_POST_URL);
    
    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`);
    }
    const res = await response.json();
    const posts: Post[] = res?.posts;
    return posts;
  } catch (error) {
    console.error(" hata oluştu:", error);
    return [];
  }
}

export async function fetchTagList(): Promise<TagList[]> {
  try {
    const response = await fetch(TAG_LIST_URL);
    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`);
    }
    const tag_list: TagList[] = await response.json();
    return tag_list;
  } catch (error) {
    console.error("hata oluştu:", error);
    return [];
  }
}
export async function fetchPostByTag(limit:string,tag:string) {
  try {
    const response = await fetch(ALL_POST_URL);
    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`);
    }
    const res = await response.json();
    const posts:Post[] = res.posts;
    return posts;
  } catch (error) {
    console.error(" hata oluştu:", error);
    return [];
  }
}

export async function fetchTrendingPosts(): Promise<Post[]> {
  try {
    const response = await fetch(SORT_BY_VIEWS);
    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`);
    }
    const posts: Post[] = await response.json();
    const trending_posts = posts.slice(0, 50);
    return trending_posts;
  } catch (error) {
    console.error("Ürünler çekilirken hata oluştu:", error);
    return [];
  }
}
