import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getUrls } from './urlActions.jsx'

class Url extends React.Component {

    componentDidMount() {
        this.props.getUrls(0);
    }

    render() {
        let posts = this.props.posts.records.map(item => {
            return (
                <div key={item.id} className="post">
                    <div className="header">{item.longUrl}</div>
                    <div className="content">{item.shortUrl}</div>
                    <div className="content">{item.created}</div>
                    <div className="content">{item.count}</div>
                    <hr />
                </div>
            );
        });

        return (
            <div id="blog">
                {posts}
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        posts: state.data,
        error: state.error
    }
}

let mapDispatch = (dispatch) => {
    return {
        getUrls: (index) => dispatch(getUrls(index))
    }
}

export default connect(mapProps, mapDispatch)(Url) 