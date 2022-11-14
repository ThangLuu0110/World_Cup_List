import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WCLogo from '../../../assets/images/World-Cup-2022-logo.png';

interface HeaderProps{

}

export class Header extends Component<HeaderProps> {
    pageTitle: string = 'World Cup 2022';

    tabMenuList: {index: number, tabName: string, tabPath: string}[] = [
        {index: 0, tabName: 'Home', tabPath: ''},
        {index: 1, tabName: 'Player List', tabPath: 'list'},
        {index: 2, tabName: 'Add Player', tabPath: 'create'},
    ];

    render() {
        return (
            <header className="header-wrapper grid">
                <div className="header grid wide">
                    <div className="header__logo">
                        <Link to='/' className="header__logo--link">
                            <img src={WCLogo} alt=''/>
                            <span>World Cup Informations</span>
                        </Link>
                    </div>
                    <nav className="header__navbar">
                        <ul className="header__navbar--list">
                            {this.tabMenuList.map(tab => (
                                <li>
                                    <Link to={`/${tab.tabPath}`}>
                                        {tab.tabName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
