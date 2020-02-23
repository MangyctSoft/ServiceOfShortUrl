import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewUrl, changeUrl } from './addUrlActions.jsx'

class AddUrl extends React.Component {
    render() {
        return (
            <div id="AddUrlClass">
                    <div>
                    <input type="input" className="postUrl" value={this.props.texturl} onChange={(e) => this.props.changeUrl(e.target.value)} />
                    
                    <input type="button" className='urlSubmit' value="Добавить url" onClick={() => this.props.addNewUrl(this.props.texturl)} /></div>

                </div>
        );
    }
};

let mapProps = (state) => {
    return {
        texturl: state.addUrl.texturl,
        error: state.addUrl.error
    }
}

let mapDispatch = (dispatch) => {
    return {
        addNewUrl: bindActionCreators(addNewUrl, dispatch),
        changeUrl: bindActionCreators(changeUrl, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(AddUrl)