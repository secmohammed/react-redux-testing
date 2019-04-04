import React, { Component } from 'react';

class Headline extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render() {
        const { header, desc } = this.props
        if(!header) {
            return (
              <div></div>
            );
        }
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
export default Headline;