import React, { Component, PropTypes } from 'react';
import Wrapper from './Wrapper';
import Progress from './Progress';


class Main extends Component {
    render() {
        return (
            <div>
                <Progress></Progress>
                <Wrapper categoryId = { this.props.categoryId }></Wrapper>
            </div>
        );
    }
}

Main.propTypes = {
  categoryId: PropTypes.string.isRequired
};


export default Main;