import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer';
import ItemEdit from './ItemEdit';

class Wrapper extends Component {
    render() {
        return (
            <div className="App-main__wrapper">
                <CategoryContainer/>
                <ItemEdit/>
            </div>
        );
    }
}

export default Wrapper;