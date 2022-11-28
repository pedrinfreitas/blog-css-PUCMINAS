<script lang="ts">
  import type { IPost } from "src/stores/posts.model";
  export let post; //: IPost;
</script>

<div
  class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
>
  <div
    class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
  >
    <h1 class="text-5xl font-bold leading-none sm:text-6xl">
      Blog
      <span class="dark:text-violet-400">CSS</span> <br /> Avançado
    </h1>
    <p class="mt-6 mb-8 text-lg sm:mb-12">Trabalho final - PUCMINAS</p>
  </div>
  <div
    class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
  >
    <img
      src="hero-ilustracao.svg"
      alt=""
      class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
    />
  </div>
</div>
