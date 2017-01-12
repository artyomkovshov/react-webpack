import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import ItemsList from './ItemsList';
import AddItem from './AddItem';
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/todo-actions'


class ItemsContainer extends Component {


    render() {
        debugger;
        const { categoryId, todos, actions } = this.props;
        const array = todos.filter(elem => elem.categoryId === parseInt(categoryId));


        return (
            <div className="App-main__items">
                <AddItem categoryId={categoryId} {...actions}></AddItem>
                <ItemsList items={array} categoryId={categoryId} actions={actions}/>
            </div>
        );
    }
}

ItemsContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todoReducer
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsContainer)