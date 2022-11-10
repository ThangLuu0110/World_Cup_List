import {API_PATH, DOMAIN_URL} from "../Component/Common Block/const";

export default function getNationList(token: string){
    const url:string = DOMAIN_URL;

    console.log(token, url + API_PATH.NATION_LIST);
    
    const options = {
        method: 'GET',
        header: {
            'Authorization': `Bearer ${token}`,
        },
        body: null
    };

    return fetch(url + API_PATH.NATION_LIST, options)
            .then(response => response.json())         
}