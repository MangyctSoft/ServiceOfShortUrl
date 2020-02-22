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
                <table>
                    <tr>
                        <th>Длинный урл</th>
                        <th>Короткий</th>
                        <th>Дата</th>
                        <th>Счетчик</th>
                    </tr>
                    <tr>
                        <div key={item.id} className="post"></div>
                        <td className="header">{item.longUrl}</td>
                        <td className="content">{item.shortUrl}</td>
                        <td className="content">{item.created}</td>
                        <td className="content">{item.count}</td>
                    </tr>
                </table>                  
                    
                
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