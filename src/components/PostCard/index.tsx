import type { PostCardProps } from "../../types/post";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const PostCard: React.FC<PostCardProps> = ({ postInfo }) => {
  const navigate = useNavigate();
  return (
    <S.Wrap key={postInfo.id} onClick={() => navigate(`/post/${postInfo.id}`)}>
      <h2>{postInfo.title}</h2>
      <img src={postInfo.thumbnail} alt={postInfo.thumbnailAlt} />
      <p>{postInfo.excerpt}</p>
    </S.Wrap>
  );
};

export default PostCard;
