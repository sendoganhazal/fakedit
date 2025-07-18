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