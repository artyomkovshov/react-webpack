import React, { Component, PropTypes } from 'react';

class AddItem extends Component {
    constructor(props, context) {
        super(props);

        this.add = this.add.bind(this);
    }

    add(event) {
        event.preventDefault();
        if (!event.target["0"].value.trim()) {
          return
        }
        const id = Date.now();
        const name = event.target["0"].value;
        const categoryId = parseInt(this.props.categoryId);

        this.props.addTodo(name, id, categoryId);
        event.target.value = '';
    }

    render() {
        return (
            <div className="App-main__add-items">
                <form onSubmit={this.add}>
                    <input type="text" placeholder="New todo"/>
                    <button type="submit" className="button">Add</button>
                </form>

            </div>

        );
    }
}

AddItem.propTypes = {
  categoryId: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default AddItem;