import React, { Component, PropTypes } from 'react';
import CategoryContainer from './CategoryContainer';
import ItemsContainer from './ItemsContainer';

class Wrapper extends Component {
    render() {
        return (
            <div className="App-main__wrapper">
                <CategoryContainer></CategoryContainer>
                <ItemsContainer categoryId = { this.props.categoryId }></ItemsContainer>
            </div>
        );
    }
}

Wrapper.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default Wrapper;