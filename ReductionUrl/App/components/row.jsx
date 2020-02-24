import React from 'react'
import ReactDOM from 'react-dom'
import { updateInputControll } from '../containers/inputContorll/inputControllActions.jsx'
import UpdateState from '../Util/updateHelp.jsx'

export default class Row extends React.Component {
    render() {
        let updateBlock =
            <a className="link" href="#" onClick={() => {       
                let data = { id: this.props.data.id, longUrl: this.props.data.longUrl };
                this.props.updateUrl(data);
            }}>Обновить</a>;

        let deleteBlock =
            <a className="link" href="#" onClick={() => {
                if (confirm('Вы уверены что хотите удалить запись?')) {
                    this.props.deleteUrl(this.props.data.id);
                }
            }}>Удалить</a>;

        return (
            <tbody key={this.props.data.id}>
                <tr>
                    <td className="">{this.props.data.longUrl}</td>
                    <td className=""><a href={"/" + this.props.data.shortUrl}>{this.props.data.shortUrl}</a></td>
                    <td className="">{this.props.data.created}</td>
                    <td className="">{this.props.data.count}</td>
                    <td className="">{updateBlock}</td>
                    <td className="">{deleteBlock}</td>
                </tr>
            </tbody>
        );
    }
}