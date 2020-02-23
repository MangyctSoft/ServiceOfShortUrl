import React from 'react'
import ReactDOM from 'react-dom'

export default class Row extends React.Component {

    render() {
        let updateBlock = <a className="link" to={"/blog/post?postId=" + this.props.data.id}>Обновить</a>;
        let deleteBlock =
                <a className="link" onClick={() => {
                    if (confirm('Вы уверены что хотите удалить запись?')) {
                        this.props.deleteUrl(this.props.data.id);
                    }
                }}>Удалить</a>;

        return (
            <tbody key={this.props.data.id}>
                <tr>
                    <td className="">{this.props.data.longUrl}</td>
                    <td className="">{this.props.data.shortUrl}</td>
                    <td className="">{this.props.data.created}</td>
                    <td className="">{this.props.data.count}</td>
                    <td className="">{updateBlock}</td>
                    <td className="">{deleteBlock}</td>
                </tr>
            </tbody>
        );
    }
};