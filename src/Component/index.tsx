import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './Module/Body/homepage.component';
import {Header} from './Module/Header/header.component';

export default function MainContect(){
    return (
        <div className="grid">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    )
} 