
//pages/Main
export interface MainPagePostDataType {
  id: number;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  excerpt: string;
  createdAt: string;
  author: string;
  likes: number;
}

export interface MainPagePostResponseType {
  data: MainPagePostDataType[];
  message: string;
}

//components/PostCard
export interface PostCardProps {
  postsData: MainPagePostDataType[];
}