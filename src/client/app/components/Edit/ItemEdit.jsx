import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todo-actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';



class ItemEdit extends Component {
    constructor(props) {
        super(props);

        this.save = this.save.bind(this);
    }

    save() {

    }

    render() {
        debugger;
        const { todos, categoryId } = this.props;
        const { saveTodo } = this.props.actions;
        const itemId = parseInt(this.props.itemId);
        const item = todos.find(item => item.id === itemId);

        return (
                <form className="Edit-main__items">
                    <div className="items__button-block">
                        <input type="submit" value={"Save Changes"} className="item__button button" />
                        <Link to={"/"} className="item__button button" onClick={this.save}>Cancel</Link>
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