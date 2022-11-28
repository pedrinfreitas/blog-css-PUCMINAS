<script context="module" lang="ts">
  import { PostsAPI } from "../../stores";

  export const load = async ({ params }) => {
    const { id } = params;

    return {
      props: {
        id,
      },
    };
  };
</script>

<script lang="ts">
  import PostDetail from "$lib/PostDetail.svelte";

  export let id;
  let post;

  PostsAPI.subscribe((data) => {
    post = data.filter((e) => e.id == id)[0];
  });
</script>

<svelte:head>
  <title>Blog - {post.title}</title>
</svelte:head>

<PostDetail {post} />
