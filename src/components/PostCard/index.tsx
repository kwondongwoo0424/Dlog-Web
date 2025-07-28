import * as S from "./style";
import type { PostCardProps } from "../../types/post";

const PostCard: React.FC<PostCardProps> = ({ postsData }) => {

  return (
    <div>
      <S.Title>PostCard</S.Title>
      {postsData.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.thumbnail} alt={post.thumbnailAlt} />
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
