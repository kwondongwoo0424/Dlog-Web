import { useState, useEffect } from "react";
import PostsList from "../../components/PostsList";
import type { MainPagePostResponseType } from "../../types/post";
import { getPosts } from "../../api/post";
import * as S from "./style"

const Home = () => {
  const [posts, setPosts] = useState<MainPagePostResponseType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = () => {
      try {
        const res = getPosts();
        setPosts(res);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <S.Wrap>
      {loading ? (
        <p>Loading...</p>
      ) : posts?.data ? (
        <PostsList postsData={posts.data} />
      ) : (
        <p>No posts found</p>
      )}
    </S.Wrap>
  );
};

export default Home;
