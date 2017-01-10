import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Progress from './Progress';


class Main extends Component {
    render() {
        return (
            <div>
                <Progress></Progress>
                <Wrapper></Wrapper>

            </div>
        );
    }
}

export default Main;