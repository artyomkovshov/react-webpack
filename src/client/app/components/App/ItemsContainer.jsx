import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import ItemsList from './ItemsList';
import AddItem from './AddItem';
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/todo-actions'


class ItemsContainer extends Component {
    render() {
        debugger;
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
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsContainer)