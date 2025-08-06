import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/post";
import { useEffect, useState } from "react";
import type { PostDetailType } from "../../types/post";

const PostDetail = () => {
  const { postId } = useParams();

  const [postsDetail, setPostsDetail] = useState<PostDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsDetail = async () => {
      try {
        const res = await getPostDetail(Number(postId));
        setPostsDetail(res.data[0]);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsDetail();
  }, [postId]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!postsDetail) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <p>Post ID: {postId}</p>
      <p>Title: {postsDetail.title}</p>
      <p>Contents: {postsDetail.contents}</p>
      <p>Author: {postsDetail.author}</p>
    </div>
  );
};

export default PostDetail;
