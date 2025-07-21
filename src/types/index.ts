export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  rections: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId:number;
}

export interface PostTags {
    slug:string;
    name:string;
    url:string;
}

export interface PostParams {
  limit?: number;
  offset?: number;
  sort?: 'asc' | 'desc';
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}