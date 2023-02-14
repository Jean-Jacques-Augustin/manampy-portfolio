import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';
import Navbar from "./component/Navbar";
import IndexPage from './page';
import { Toolbar } from '@mui/material';

function App() {
    return (
        <div>
            <Navbar/>
            <Toolbar/>
            <Toolbar/>
           <IndexPage/>
        </div>
    )
}

export default App
