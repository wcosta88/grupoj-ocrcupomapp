
    //@param url: string
    //@param options: object
    ///@param bodyType: string
const httpPost = async (url, headers, bodyData, bodyType = 'json') =>  {
        let response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        });

        let jsonResponse = await response.json();
        let responseBody = await jsonResponse;
        console.log(response.status);
        console.log(responseBody);
    }

const httpGet = async (url) => {
    let response = await fetch(url, {
        method: 'GET'
    });

    let jsonResponse = await response.json();
    let responseBody = await jsonResponse;
    
    return responseBody;
}


export { httpPost, httpGet };