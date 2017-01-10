import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer';
import ItemsContainer from './ItemsContainer';

class Wrapper extends Component {
    render() {
        return (
            <div className="App-main__wrapper">
                <CategoryContainer></CategoryContainer>
                <ItemsContainer></ItemsContainer>
            </div>
        );
    }
}

export default Wrapper;