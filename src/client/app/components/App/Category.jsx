import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'


class Category extends Component {

    constructor(props, context) {
        super(props);

        this.state = { editing: false };

        this.delete = this.delete.bind(this);
        // this.startEdit = this.startEedit.bind(this);
        // this.stopEdit = this.stopEdit.bind(this);
        // this.save = this.save.bind(this);
        this.addSub = this.addSub.bind(this);
        // this.onKeyUp = this.onKeyUp.bind(this);

    }

    delete() {
        debugger;
        this.props.deleteCategory(this.props.category.id);
    }

    addSubCategory

    addSub() {
        let id = Date.now();
        let parentId = [...this.props.category.parentId];
        let indent = this.props.category.indent + 2;

        parentId.unshift(this.props.category.id);


        this.props.addSubCategory(this.props.category.name, id, parentId, indent);
    }
    
    // startEdit() {
    //     this.setState({ editing: true });
    // }

    // stopEdit() {
    //     this.setState({ editing: false });
    // }

    // save(event) {
    //     if (this.state.editing) {
    //         const { category } = this.props;
    //         const name = event.target.value.trim();

    //         if (name.length && name !== category.title) {
    //             this.props.saveCategory(category, {name});
    //         }

    //         this.stopEdit();
    //     }
    // }

    // onKeyUp(event) {
    //     if (event.keyCode === 13) {
    //         this.save(event);
    //     } else if (event.keyCode === 27) {
    //         this.stopEdit();
    //     }
    // }

    render() {

        const { editing } = this.state;
        const { category } = this.props;

        let style = {
            left: category.indent + 'em'
        }

        return (
            <li style={style} className="App-main__category-item">
                <label><input type="button" className="arrow_down icon" /><span className="category-name">{category.name}</span></label>
                <input type="button" className="icon edit-button" />
                <div className="item__button-block">
                    <input type="button" className=" remove-button icon" onClick={this.delete}/>
                    <input type="button" className=" add-category-button icon" onClick={this.addSub}/>
                </div>
            </li>
        );
    }
}

Category.propTypes = {
    deleteCategory: PropTypes.func.isRequired,
    // saveCategory: PropTypes.func.isRequired,
    addSubCategory: PropTypes.func.isRequired,
};

export default Category;