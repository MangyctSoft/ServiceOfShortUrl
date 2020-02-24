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
        this.state = { query: location.search };
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
        this.props.getUrls(0);
    }

    render() {
        let store = this.props.store.records.map(item => {
            return (
                <Row key={item.id} data={item} deleteUrl={this.deleteUrl} updateUrl={this.updateUrl}/>
            );
        });

        return (
            <div id="storeTable">     
                <table className="table">
                    <thead>
                        <tr>
                            <th width="300">Длинный урл</th>
                            <th width="40">Короткий</th>
                            <th width="250">Дата</th>
                            <th width="40">Счетчик</th>
                            <th width="70"></th>
                            <th width="70"></th>
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
        store: state.storeUrl.data,   
        error: state.storeUrl.error
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