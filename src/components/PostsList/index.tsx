import * as S from "./style";
import type { PostsListProps } from "../../types/post";
import PostCard from "../PostCard";

const PostList: React.FC<PostsListProps> = ({ postsData }) => {
  return (
    <>
      <S.PostsList>
        {postsData.map((post) => (
          <PostCard key={post.id} postInfo={post} />
        ))}
      </S.PostsList>
    </>
  );
};

export default PostList;
