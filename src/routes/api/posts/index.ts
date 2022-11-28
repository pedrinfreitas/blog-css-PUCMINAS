import { categoriesMock } from "./../../../stores/categories.model";
import type { IMedia } from "src/stores/media.model";
import type { IPost } from "src/stores/posts.model";
// import type { IPokemonAPI } from "src/stores/pokestore.model";

export async function get() {
  const postResponse = await fetch(
    `https://conexao.pucminas.br/wp-json/wp/v2/posts`
  );
  const postRequest = await postResponse.json();

  const fnFecth = async (id: number) => {
    const mediaResponse = await fetch(
      `https://conexao.pucminas.br/wp-json/wp/v2/media/${id}`
    );
    const mediaRequest = await mediaResponse.json();

    if (!mediaRequest) {
      return "";
    }

    return await mediaRequest?.description?.rendered;
  };

  const loadedPosts: IPost[] = postRequest.map(async (e: IPost) => {
    const loadedMedia = fnFecth(e?.featured_media);

    return {
      id: e.id,
      featured_media: e.featured_media,
      date: e.date,
      slug: e.slug,
      title: e.title.rendered,
      content: e.content.rendered,
      categories: e.categories.map((el) => categoriesMock[el]),
      excerpt: e.excerpt.rendered,
      image: await loadedMedia,
    };
  });

  return {
    status: 200,
    body: await Promise.all(loadedPosts),
  };
}
