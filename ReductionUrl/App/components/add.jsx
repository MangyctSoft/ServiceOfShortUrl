import React from 'react'
import ReactDOM from 'react-dom'

export default class Add extends React.Component {

    render() {        

        return (
            <div id="AddUrlClass">
                <div>
                    <input type="input" className="postUrl" value={this.props.texturl} onChange={(e) => this.props.changeUrl(e.target.value)} />
                    <input type="button" className='urlSubmit' value="Добавить url" onClick={() => this.props.addNewUrl(this.props.texturl)} />
                </div>
            </div>
        );
    }
}