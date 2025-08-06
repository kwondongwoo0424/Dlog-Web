
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

//components/PostsList
export interface PostsListProps {
  postsData: MainPagePostDataType[];
}

//components/PostCard
export interface PostCardProps {
  postInfo: MainPagePostDataType;
};

export interface PostDetailType {
  id: number;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  contents: string;
  excerpt: string;
  createdAt: string;
  author: string;
  likes: number;
}