import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Row from '../../components/row.jsx'
import { getUrls, deleteUrl, updateUrl } from './storeUrlActions.jsx'
import "isomorphic-fetch"



class StoreUrl extends React.Component {
    constructor(props) {
        super(props);
        this.deleteUrl = this.deleteUrl.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
    }

    deleteUrl(id) {
        this.props.deleteUrl(id);
    }

    updateUrl(data) {
        this.props.updateUrl(data);
    }

    componentDidMount() {
        this.props.getUrls();
    }

    render() {
        let store = this.props.store.data.map(item => {
            return (
                <Row key={item.id} data={item} deleteUrl={this.deleteUrl} updateUrl={this.updateUrl} />
            );
        });

        return (
            <div className="block" id="storeTable">     
                <table className="table">
                    <thead>
                        <tr>
                            <th width="400">Длинный урл</th>
                            <th width="100">Короткий</th>
                            <th width="350">Дата</th>
                            <th width="100">Счетчик</th>
                            <th width="100"></th>
                            <th width="100"></th>
                        </tr>
                    </thead>
                    {store}
                </table>
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        store: state.storeUrl
    }
}

let mapDispatch = (dispatch) => {
    return {
        getUrls: bindActionCreators(getUrls, dispatch),
        deleteUrl: bindActionCreators(deleteUrl, dispatch),
        updateUrl: bindActionCreators(updateUrl, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(StoreUrl) 