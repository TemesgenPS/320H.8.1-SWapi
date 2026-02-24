const baseUrl = "https://swapi.dev/api";

export async function getAllStarships() {
    const res = await fetch(`${baseUrl}/starships/`);
    const data = await res.json();
    return data.results;
}