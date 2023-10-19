

export default async function fetchApi(url) {
    const response = await fetch(url)
    const data = response.json()

    return data;
}
