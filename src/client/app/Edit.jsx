import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/Edit/Header';
import CategoryContainer from './components/Edit/CategoryContainer';
import ItemEdit from './components/Edit/ItemEdit';

class Edit extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CategoryContainer/>
                <ItemEdit itemId={this.props.params.itemId}/>
            </div>
        );
    }
}

Edit.propTypes = {
  params: PropTypes.object.isRequired
};


export default Edit;
