<script lang="ts">
  import { PostsAPI } from "../stores/";
  import { paginate, DarkPaginationNav } from "svelte-paginate";

  let postsAPI;
  PostsAPI.subscribe((data) => {
    postsAPI = data;
  });

  import Post from "$lib/Post.svelte";
  import Hero from "$lib/Hero.svelte";

  let search = "";
  let filteredPosts = [];

  $: searched = filteredPosts = postsAPI.filter((e) =>
    e?.title?.toLowerCase().includes(search.toLowerCase())
  );
  $: items = searched || postsAPI;

  let currentPage = 1;
  let pageSize = 3;
  $: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Blog - Home</title>
</svelte:head>

<!-- 
<input
  bind:value={search}
  type="text"
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  placeholder="Search Post"
/> -->

{#if !paginatedPosts.length}
  <h1>not found</h1>
{:else}
  <section class="dark:bg-gray-800 dark:text-gray-100">
    <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <Hero post={paginatedPosts[0]} />

      <div
        class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {#each paginatedPosts as post}
          <Post {post} />
        {/each}
      </div>

      <div>
        <DarkPaginationNav
          totalItems={items?.length}
          {pageSize}
          {currentPage}
          limit={1}
          showStepOptions={true}
          on:setPage={(e) => (currentPage = e.detail.page)}
        />
      </div>
    </div>
  </section>
{/if}
