<script lang="ts">
  import type { IPost } from "src/stores/posts.model";
  export let post; //: IPost;
</script>

<a
  rel="noopener noreferrer"
  href={`/post/${post.id}`}
  class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
>
  <img
    role="presentation"
    class="object-cover w-full rounded h-44 dark:bg-gray-500"
    src={post.image}
    alt=""
  />
  <div class="p-6 space-y-2">
    <h3
      class="text-2xl font-semibold group-hover:underline group-focus:underline"
    >
      {post.title}
    </h3>
    <span class="text-xs dark:text-gray-400"
      >{new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(post.date))}</span
    >
    <p>
      {@html post.excerpt}
    </p>
  </div>
</a>
