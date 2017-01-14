import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';


class Progress extends Component {
    render() {
        
        const categories = this.props.categories.present;
        const done = categories.filter(e => e.done);
        const count = Math.round(done.length/categories.length*100);


        const style = {
            width: count+'%'
        }

        return (
            <div className="meter">
                <span style={style}></span>
            </div>
        );
    }
}

Progress.PropTypes = {
    categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  categories: state.categoryReducer
})

export default connect(
  mapStateToProps
)(Progress)