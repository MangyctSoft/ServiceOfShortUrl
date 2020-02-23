import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Row from '../../components/row.jsx';
import { getUrls, deleteUrl } from './storeUrlActions.jsx'
import "isomorphic-fetch";


class StoreUrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: location.search };
        this.deleteUrl = this.deleteUrl.bind(this);
    }

    deleteUrl(id) {
        let pageIndex; let tag;
       
        this.props.deleteUrl(id);
    }

    componentDidMount() {
        this.props.getUrls(0);
    }

    render() {
        let store = this.props.store.records.map(item => {
            return (
                <Row key={item.id} data={item} deleteUrl={this.deleteUrl}/>
            );
        });

        return (

            <div id="storeTable">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Длинный урл</th>
                        <th>Короткий</th>
                        <th>Дата</th>
                        <th>Счетчик</th>
                        <th></th>
                        <th></th>
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
        deleteUrl: bindActionCreators(deleteUrl, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(StoreUrl) 