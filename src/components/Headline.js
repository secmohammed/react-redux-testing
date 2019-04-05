import React, { Component } from 'react';
import PropTypes from "prop-types";

class Headline extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render() {
        const { header, desc } = this.props
        return (
            <div data-test="headline">
                <h1 data-test="header">
                    { header }
                    <p data-test="description">
                        { desc }
                    </p>
                </h1>
            </div> 
        );
    }
}
Headline.propTypes = {
    header: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};
export default Headline;