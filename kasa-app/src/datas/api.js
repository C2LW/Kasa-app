export function getData() {
  const URL_API = "/src/datas/announcements.json";

  return fetch(URL_API)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement : " + response.status);
      }
      return response.json(); // ← on parse après avoir vérifié
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du fichier JSON :", error);
      return [];
    });
}


export async function getOne(id) {
  const all = await getData()
  return all.find((item) => item.id === id) ?? null
}