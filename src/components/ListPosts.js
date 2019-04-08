import React, { Component } from 'react';
import PropTypes from "prop-types";

class ListPosts extends Component {
    render() {
        return (
            <div data-test="list-posts">
                <h2 data-test="title">{this.props.title}</h2>
                <div data-test="desc">
                    {this.props.desc}
                </div>
            </div>
        );
    }
}
ListPosts.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}
export default ListPosts;