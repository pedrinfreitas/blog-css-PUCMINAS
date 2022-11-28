import type { IMedia } from "src/stores/media.model";
import type { IPost } from "src/stores/posts.model";

export async function get() {
  const url = `https://conexao.pucminas.br/wp-json/wp/v2/media`;
  const res = await fetch(url);
  const data = await res.json();

  //data2[0].description.rendered
  const loadedPosts: IMedia[] = data.map((e: IMedia) => {
    return {
      id: e.id,
      slug: e.slug,
      title: e.title.rendered,
      description: e.description.rendered,
      image: e.guid.rendered,
    };
  });

  return {
    status: 200,
    body: loadedPosts,
  };
}
