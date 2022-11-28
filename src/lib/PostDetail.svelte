<script lang="ts">
  import type { IPost } from "src/stores/posts.model";
  export let post; //: IPost;

  console.log(post);
</script>

<div class="p-4 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
  <a
    rel="noopener noreferrer"
    href="/"
    class="flex items-center p-2 space-x-3 rounded-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      viewBox="0 0 256 256"
      ><rect fill="none" /><line
        x1="216"
        y1="128"
        x2="40"
        y2="128"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      /><polyline
        points="112 56 40 128 112 200"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      /></svg
    >
    <span>Voltar</span>
  </a>

  <div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
    <img src="../{post.image}" alt="" class="w-full w-100 dark:bg-gray-500" />
    <div
      class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900"
    >
      <div class="space-y-2">
        <a
          rel="noopener noreferrer"
          href="#"
          class="inline-block text-2xl font-semibold sm:text-3xl"
        >
          {post.title}</a
        >
        <p class="text-xs dark:text-gray-400">
          By
          <a rel="noopener noreferrer" href="#" class="text-xs hover:underline"
            >{new Intl.DateTimeFormat("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.date))}</a
          >
        </p>
      </div>
      <div class="dark:text-gray-100">
        <p>{@html post.content}</p>
      </div>
    </div>
  </div>
</div>
