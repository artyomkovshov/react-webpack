import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todo-actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';




class ItemEdit extends Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this);
    }

    save() {
        let { categoryId } = this.props;
        const todos = this.props.todos.present;
        const itemId = parseInt(this.props.itemId);
        const item = todos.find(item => item.id === itemId);
        categoryId = categoryId || item.categoryId;

        const name = this.refs.name.value;
        const done = this.refs.isDone.checked;
        const description = this.refs.desc.value;

        this.props.actions.saveTodo(item.id, name, categoryId, done, description);
        browserHistory.push('/categories/'+categoryId);
    }

    render() {
        const { categoryId } = this.props;
        const todos = this.props.todos.present;
        const { saveTodo } = this.props.actions;
        const itemId = parseInt(this.props.itemId);
        const item = todos.find(item => item.id === itemId);

        return (
                <form className="Edit-main__items">
                    <div className="items__button-block">
                        <input type="button" value={"Save Changes"} className="item__button button"  onClick={this.save}/>
                        <Link to={"/"} className="item__button button">Cancel</Link>
                    </div>
                    <input type="text" placeholder="Header" className="Edit-main__header-input" defaultValue={item.name} ref="name"/>
                    <label><input type="checkbox" ref="isDone"/><span>Done</span></label>
                    <div>Category - {categoryId || item.categoryId}</div>
                    <textarea placeholder="Description" className="Edit-main__text-input" rows="30" cols="160" defaultValue={item.description} ref="desc"></textarea>
                </form>

        );
    }
}

ItemEdit.propTypes = {
  itemId: PropTypes.string.isRequired,
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
)(ItemEdit)