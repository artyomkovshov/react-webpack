import React, { Component } from 'react';
import './App.css';
import Header from './components/Edit/Header';
import Main from './components/Edit/Main';


class Edit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default Edit;
