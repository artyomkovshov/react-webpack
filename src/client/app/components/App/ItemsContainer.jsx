import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import ItemsList from './ItemsList';
import AddItem from './AddItem';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todo-actions';
import * as CategoryActions from '../../actions/category-actions';


class ItemsContainer extends Component {

    componentDidUpdate(prevProps, prevState) {
        debugger;
        const { todos, categoryActions } = this.props;
        const { categoryId } = this.props.params;

        const undoned = todos.filter(elem => elem.categoryId === parseInt(categoryId) && !elem.done);
        const doned = todos.filter(elem => elem.categoryId === parseInt(categoryId));
        if (undoned.length === 0 && doned.length > 0) {
            categoryActions.setDone(parseInt(categoryId));
        } else {
            categoryActions.setUndone(parseInt(categoryId));
        }


    }

    render() {
        const filter = this.props.location.query.filter ? this.props.location.query.filter : '';
        const { todos, actions } = this.props;
        const { categoryId } = this.props.params;
        const array = todos.filter(elem => elem.categoryId === parseInt(categoryId) && elem.name.includes(filter));


        return (
            <div className="App-main__items">
                <AddItem categoryId={categoryId} {...actions}></AddItem>
                <ItemsList items={array} categoryId={categoryId} actions={actions} isShowActive={this.props.isShowActive}/>
            </div>
        );
    }
}

ItemsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  isShowActive: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  todos: state.todoReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
    categoryActions: bindActionCreators(CategoryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsContainer)