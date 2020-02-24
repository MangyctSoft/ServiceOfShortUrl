import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeUrl, addNewUrl, buttonCancel, updateUrl, updateInputControll } from './inputControllActions.jsx'
import "isomorphic-fetch"


class InputControll extends React.Component {
    constructor(props) {
        super(props);
        this.changeUrl = this.changeUrl.bind(this);
        this.addNewUrl = this.addNewUrl.bind(this);
        this.buttonCancel = this.buttonCancel.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.updateInputControll = this.updateInputControll.bind(this);
       
    }

    changeUrl(text) {
        this.props.changeUrl(text);
    }

    addNewUrl(texturl) {
        this.props.addNewUrl(texturl);
    }

    updateInputControll(texturl) {
        this.props.updateInputControll(texturl);
    }

    buttonCancel() {
        this.props.buttonCancel();
    }

    updateUrl(id, longUrl) {
        this.props.updateUrl(id, longUrl);
    }

    render() {  
        let inputAddUpdateUrl = this.props.data.isUpdate ?
            <div>
                <input id={this.props.data.id} type="input" size="100" className="postUrl" value={this.props.data.longUrl} onChange={(e) => this.props.changeUrl(e.target.value)} />
                <input type="button" className='urlSubmit' value="ОБНОВИТЬ" onClick={() => this.props.updateUrl(this.props.data.id, this.props.data.longUrl)} />
                <input type="button" className='urlCancel' value="ОТМЕНА" onClick={() => this.props.buttonCancel()} />
            </div>:
            <div>
                <input id={this.props.data.id} type="input" size="100" className="postUrl" value={this.props.data.longUrl} onChange={(e) => this.props.changeUrl(e.target.value)} />
                <input type="button" className='urlSubmit' value="ДОБАВИТЬ" onClick={() => this.props.addNewUrl(this.props.data.longUrl)} />
            </div>
            ;

        return (
            <div id="InputControll">
                {inputAddUpdateUrl}
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        data: state.inputControll   
    }
}

let mapDispatch = (dispatch) => {
    return {
        changeUrl: bindActionCreators(changeUrl, dispatch),
        addNewUrl: bindActionCreators(addNewUrl, dispatch),
        buttonCancel: bindActionCreators(buttonCancel, dispatch),
        updateUrl: bindActionCreators(updateUrl, dispatch),
        updateInputControll: bindActionCreators(updateInputControll, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(InputControll) 