import React, {Component, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import WCLogo from '../../../assets/images/World-Cup-2022-logo.png';
import {FiHome, FiList} from 'react-icons/fi';
import {AiOutlineUserAdd} from 'react-icons/ai';

interface HeaderProps{
    activeTab: string;
    handleActiveTab: (e: any) => void;
    pathname: string;
}

export class Header extends Component<HeaderProps> {
    pageTitle: string = 'World Cup 2022';

    tabMenuList: {index: number, tabName: string, tabPath: string, icon: ReactElement}[] = [
        {index: 0, tabName: 'Home', tabPath: '', icon: <FiHome/>},
        {index: 1, tabName: 'Player List', tabPath: 'list', icon: <FiList/>},
        {index: 2, tabName: 'Add Player', tabPath: 'create', icon: <AiOutlineUserAdd/>},
    ];

    render() {
    const { activeTab, handleActiveTab } = this.props;
        
        return (
            <header className="header-wrapper grid">
                <div className="header grid wide">
                    <div className="header__logo" 
                        onClick={(e) => {
                            handleActiveTab("Home");
                        }}>
                        <Link to='/' className="header__logo--link">
                            <img src={WCLogo} alt=''/>
                            <span>World Cup <br/> Informations</span>
                        </Link>
                    </div>
                    <nav className="header__navbar">
                        <ul className="header__navbar--list">
                            {this.tabMenuList.map((tab,index) => (
                                <li key={index} 
                                    className="header__navbar--item"
                                    onClick={(e) => {
                                        switch (tab.tabPath) {
                                          case "":
                                            handleActiveTab("Home");
                                            break;
                                          case "list":
                                            handleActiveTab("PlayerList");
                                            break;
                                          case "create":
                                            handleActiveTab("AddPlayer");
                                            break;
                                          default:
                                            break;
                                        }
                                      }}
                                    >
                                    <Link to={`/${tab.tabPath}`}>
                                        <span>{tab.icon}</span><br/>
                                        <span>{tab.tabName}</span>
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
