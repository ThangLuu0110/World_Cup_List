import React, { Component} from 'react';
import getTokenAuthen from '../../../api/token.api';

interface HomePageProps{

}

export class HomePage extends Component<HomePageProps>{
    componentDidMount(): void {
        getTokenAuthen().then(token => {
            console.log(token);
        })
    }

    render() {
        return (
            <></>
        )
    }
}