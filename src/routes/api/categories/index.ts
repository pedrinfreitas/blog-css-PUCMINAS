import type { ICategories } from "src/stores/categories.model";

export async function get() {
  const url = `https://conexao.pucminas.br/wp-json/wp/v2/categories`;
  const res = await fetch(url);
  const data = await res.json();

  const loadedCategories: ICategories[] = data.map((e: ICategories) => {
    return {
      id: e.id,
      name: e.name,
      // slug: e.name,
    };
  });

  return {
    status: 200,
    body: loadedCategories,
  };
}
