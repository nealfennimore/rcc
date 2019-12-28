export default async function fetch( url, options = {} ) {
    const response = await window.fetch( url, options );
    const json = await response.json();
    return json;
}
