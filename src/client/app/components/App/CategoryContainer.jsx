import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';
import { connect } from 'react-redux'
import * as CategoryActions from '../../actions/category-actions.jsx'

class CategoryContainer extends Component {
    render() {
        return (
            <div className="App-main__category">
                <AddCategory></AddCategory>
                <CategoryList categories={this.props.categories.present} actions={this.props.actions}/>
            </div>
        );
    }
}

CategoryContainer.propTypes = {
  categories: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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