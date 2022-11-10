import React, { Component} from 'react';
import getNationList from '../../../api/list-nation.api';


interface HomePageProps{
    token: string;
}

export class HomePage extends Component<HomePageProps>{
    
    componentDidMount(): void {
        if(this?.props?.token){
            getNationList(this?.props?.token)
            .then((response) => {
                console.log(response);
                
            })
        }
    }

    render() {
        return (
            <></>
        )
    }
}