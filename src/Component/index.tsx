import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import getTokenAuthen from '../api/token.api';
import { CreatePage } from './Module/Body/createpage.component';
import {HomePage} from './Module/Body/homepage.component';
import { ListPage } from './Module/Body/listpage.component';
import {Header} from './Module/Header/header.component';

enum ActiveTab {
    Home,
    PlayerList,
    AddPlayer,
}
interface MainContenProps{
    token: string;
}

type ActiveTabKey = keyof typeof ActiveTab;

export default function MainContent({token}:MainContenProps) {
    const [activeTab, setActiveTab] = useState<ActiveTabKey>(
        window.location.pathname === '/' ? 'Home' : (
            window.location.pathname === '/list' ? 'PlayerList' : 'AddPlayer'
        )
    );

    const handleActiveTab = (tabname: ActiveTabKey) => {
        setActiveTab(tabname);
    }

    return (
        <div className="grid">
            <Header
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
                pathname={window.location.pathname}
            />
            <Routes>
                <Route path="/" element={<HomePage token={token}/>}/>
                <Route path="/list" element={<ListPage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
            </Routes>
        </div>
    )
} 