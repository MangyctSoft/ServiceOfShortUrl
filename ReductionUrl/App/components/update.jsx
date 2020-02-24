import React from 'react'
import ReactDOM from 'react-dom'

export default class Update extends React.Component {
    render() {
        return (
            <div id="UpdateUrl">
                <div>
                    <input type="input" size="100" className="postUrl" value={this.props.texturl} onChange={(e) => this.props.changeUrl(e.target.value)} />
                    <input type="button" className='urlSubmit' value="Добавить url" onClick={() => this.props.updateButton(this.props.id, this.props.texturl)} />
                </div>
            </div>
        );
    }
}