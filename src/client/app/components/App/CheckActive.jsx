import React, { Component, PropTypes } from 'react';

class CheckActive extends Component {
    constructor(props) {
        super(props);

        this.showAll = this.showAll.bind(this);
        this.showActive = this.showActive.bind(this);
        this.toogleShow = this.toogleShow.bind(this);
    }

    showAll() {
        this.props.showAll();
    }

    showActive() {
        this.props.showActive();
    }

    toogleShow() {
        if (this.refs.showFilter.checked) {
            this.showAll();
        } else {
            this.showActive();
        }
    }

    render() {
        return (
            <div className="App-header__checkActive">
                <label><input type="checkbox" id="showActive" ref="showFilter" onChange={this.toogleShow}/>Show active</label>
            </div>
        );
    }
}

export default CheckActive;

CheckActive.propTypes = {
  showActive: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired
};
