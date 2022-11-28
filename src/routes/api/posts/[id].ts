import { categoriesMock } from "./../../../stores/categories.model";
import type { IPost } from "src/stores/posts.model";
// import { loaded } from "./../../../stores/pokestore";

export async function get({ params }) {
  const { id } = params;
  const url = `https://conexao.pucminas.br/wp-json/wp/v2/posts/${id}`;

  const res = await fetch(url);
  const data: IPost = await res.json();

  const loadedPost = {
    id: data.id,
    date: data.date,
    slug: data.slug,
    title: data.title.rendered,
    content: data.content.rendered,
    categories: data.categories.map((el) => categoriesMock[el]),
    excerpt: data.excerpt.rendered,
    image: data._links["wp:attachment"][0].href,
  };

  return {
    status: 200,
    body: loadedPost,
  };
}
