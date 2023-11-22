export default async function fetchApi<TData>(url: string): Promise<TData> {
    const response = await fetch(url);
    const data = response.json();

    return data;
}
