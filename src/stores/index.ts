import { postsMock } from "./posts.model";
import { writable } from "svelte/store";

export const loading = writable(false);

export const PostsAPI = writable(postsMock);

// export const postsStore = writable([]);

// const fetchPostsAPI = async () => {

//     const [postsReq, mediasReq] = await Promise.all([
//         fetch('api/posts'),
//         fetch('api/medias'),
//       ])

//       if (postsReq.ok && mediasReq.ok) {
//           const { posts } = await postsReq.json();
//           const { medias } = await mediasReq.json();

//           const postsWithMedias = posts.map(e=>{

//           })
//       }

//   const url = `/posts`;
//   const res = await fetch(url);
//   const data: IPostAPI = await res.json();

//   postsStore.set(posts);
// };

// fetchPostsAPI();
