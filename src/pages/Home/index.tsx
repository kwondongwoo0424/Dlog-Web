import { useState, useEffect } from "react";
import PostsList from "../../components/PostsList";
// import Sidebar from "../../components/sidebar";
import type { MainPagePostResponseType } from "../../types/post";
import { getPosts } from "../../api/post";
import * as S from "./style"

const Home = () => {
  const [posts, setPosts] = useState<MainPagePostResponseType | null>(null);

  useEffect(() => {
    setPosts(getPosts())
  }, []);

  return (
    <S.Wrap>
      {/* <Sidebar /> */}
      {posts ? <PostsList postsData={posts.data} /> : /*{<Loading />}*/ <p>loading</p>}
    </S.Wrap>
  );
};

export default Home;
