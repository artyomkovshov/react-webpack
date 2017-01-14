import React, { Component, PropTypes } from 'react';
import './App.css';
import Header from './components/Edit/Header';
import CategoryContainer from './components/Edit/CategoryContainer';
import ItemEdit from './components/Edit/ItemEdit';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: null
        }
        
        this.setCategory = this.setCategory.bind(this);
    }

    setCategory(categoryId) {
        this.setState({
            categoryId: categoryId
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <CategoryContainer setCategory={this.setCategory}/>
                <ItemEdit itemId={this.props.params.itemId} categoryId={this.state.categoryId}/>
            </div>
        );
    }
}

Edit.propTypes = {
  params: PropTypes.object.isRequired
};


export default Edit;
