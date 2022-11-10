import {API_PATH, DOMAIN_URL} from "../Component/Common Block/const";

export default function getTokenAuthen(){
    const url:string = DOMAIN_URL;
    
    const formData = new FormData();
    formData.append('username', 'manhthang110@vti.com');
    formData.append('password', 'Manhthang246');
    formData.append('grant_type', 'password');
    formData.append('client_id', '3MVG9wt4IL4O5wvJqLVMdEcJ1QXeoVcdnUHXHZTs7tiXCsuVQbDqi6b21U6RjQCNdi4nVy36Vg_rula0bh6FL');
    formData.append('client_secret', 'D73778090BB5A104E2B56DFFAABCC5D3730D541B5AEEE3B17CED64126821CC4E');


    const options = {
        method: 'POST',
        header: {'Content-Type': 'multipart/form-data;'},
        body: formData
    };

    return fetch(url + API_PATH.TOKEN_AUTHEN, options)
            .then(response => response.json())         
}