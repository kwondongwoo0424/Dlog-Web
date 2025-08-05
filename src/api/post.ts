// import api from "../lib/axios";

export const getPosts = /*async*/ () => {
  //   const response = await api.get(`{API ENDPOINT}`);
  //   if (response.status !== 200) {
  //     throw new Error();
  //   }
  //   return response.data;

  const responee = {
    data: [
      {
        id: 1,
        title: "sync",
        thumbnail: "image1.png",
        thumbnailAlt: "image excerpt1",
        excerpt: "sync는 힘들다",
        createdAt: "2025-07-25T22:35:59.359988",
        author: "권동우",
        likes: 3,
      },
      {
        id: 2,
        title: "Dlog 개발 일지",
        thumbnail: "image.png",
        thumbnailAlt: "image excerpt",
        excerpt: "Dlog를 개발하며 있었던 일들",
        createdAt: "2025-07-25T22:35:59.359988",
        author: "kwondongwoo0424",
        likes: 17,
      },
    ],
    message: "Successfully fetched",
  };
  return responee;
};

// export const dislikeReaction = async () => {
//   const response = await api.get(`API ENDPOINT`);
//   if (response.status !== 200) {
//     throw new Error();
//   }
//   return response.data;
// };
