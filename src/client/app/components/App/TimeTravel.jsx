import React, { Component } from 'react';
import { ActionCreators } from 'redux-undo';
import { connect } from 'react-redux';


class TimeTravel extends Component {

        constructor(props) {
            super(props);

            this.undo = this.undo.bind(this);
            this.redo = this.redo.bind(this);
        }
        
        undo() {
            debugger;
            this.props.dispatch(ActionCreators.undo())
        }

        redo() {
            debugger;
            this.props.dispatch(ActionCreators.redo())
        }

        render() {
            return (
                <div className="">
                    <input type="button" className="button" value="Undo" onClick={this.undo}/>
                    <input type="button" className="button" value="Redo" onClick={this.redo}/>
                </div>
            );
    }
}

export default connect()(TimeTravel)


