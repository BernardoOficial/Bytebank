const serviceFetch = async (url, config) => {

    let response = await fetch(url, config)
    response = await response.json();
    return response
}

export default serviceFetch;