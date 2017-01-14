import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';



class Category extends Component {

    constructor(props, context) {
        super(props);

        this.state = { editing: false, addingSub: false };

        this.delete = this.delete.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.stopEdit = this.stopEdit.bind(this);
        this.save = this.save.bind(this);
        this.saveSub = this.saveSub.bind(this);
        this.startAddSub = this.startAddSub.bind(this);
        this.stopAddSub = this.stopAddSub.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);

    }

    delete() {
        debugger;
        this.props.deleteCategory(this.props.category.id);
    }

    startAddSub() {
        this.setState({ addingSub: true });
    }

    stopAddSub() {
        this.setState({ addingSub: false });
    }

    saveSub(event) {
        if (this.state.addingSub) {
            let id = Date.now();
            const parentId = [...this.props.category.parentId];
            const indent = this.props.category.indent + 2;
            const name = event.target.value.trim();
            const visible = !this.props.category.collapsed;

            parentId.unshift(this.props.category.id);
            if (name.length) {
                this.props.addSubCategory(name, id, parentId, indent);
            }

            this.stopAddSub();

        }
    }
    
    startEdit() {
        this.setState({ editing: true });
    }

    stopEdit() {
        this.setState({ editing: false });
    }

    save(event) {
        if (this.state.editing) {
            const { category } = this.props;
            const name = event.target.value.trim();

            if (name.length && name !== category.name) {
                this.props.saveCategory(category.id, name);
            }

            this.stopEdit();
        }
    }

    onKeyUp(event) {
        if (event.keyCode === 13) {
            if (this.state.editing) {this.save(event);}
            if (this.state.addingSub) {this.saveSub(event);}
        } else if (event.keyCode === 27) {
            if (this.state.editing) {this.stopEdit();}
            if (this.state.addingSub) {this.stopAddSub();}
        }
    }

    renderCategory(category) {
        return (
            <div>
                <input type="button" className="arrow_down icon" /><Link to={"/categories/"+category.id}className="category-name">{category.name}</Link>
                <input type="button" className="icon edit-button" onClick={this.startEdit}/>
                <div className="item__button-block">
                    <input type="button" className=" remove-button icon" onClick={this.delete}/>
                    <input type="button" className=" add-category-button icon" onClick={this.startAddSub}/>
                </div>
        </div>
        )
    }

    renderCategoryInput(category) {
        return (
            <input
                type="text"
                autoComplete="off"
                autoFocus
                className="category-name__input"
                defaultValue={category.title}
                maxLength="32"
                onBlur={this.save}
                onKeyUp={this.onKeyUp}
            />
        );
     }

     renderSubInput(category, style) {
        return (
            <div style={style} className="App-main__category-item"> 
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="category-name__input"
                    defaultValue={category.name + ' - sub'}
                    maxLength="32"
                    onBlur={this.saveSub}
                    onKeyUp={this.onKeyUp}
                />   
            </div>

        );
     }


    render() {

        const { editing, addingSub } = this.state;
        const { category } = this.props;

        const style = {
            left: category.indent + 'em'
        }

        return (
            <div>
                <li style={style} className="App-main__category-item">
                    { editing ? this.renderCategoryInput(category) : this.renderCategory(category) }
                </li>
                { addingSub ? this.renderSubInput(category, style) : null }
            </div>


        );
    }
}

Category.propTypes = {
    category: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    saveCategory: PropTypes.func.isRequired,
    addSubCategory: PropTypes.func.isRequired,
    // toogleShowChild: PropTypes.func.isRequired
};

export default Category;