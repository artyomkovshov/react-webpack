import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import CategoryList from './CategoryList';
import { connect } from 'react-redux'
import * as CategoryActions from '../../actions/category-actions.jsx'

class CategoryContainer extends Component {
    render() {
        return (
            <div className="App-main__category">
                <CategoryList categories={this.props.categories} actions={this.props.actions} setCategory={this.props.setCategory}/>
            </div>
        );
    }
}

CategoryContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categories: state.categoryReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CategoryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer)