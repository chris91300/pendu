
//TODO: any a modifier
export default async function fetchApi(url: string) {
    const response = await fetch(url)
    const data = response.json()
    
    return data;
}
