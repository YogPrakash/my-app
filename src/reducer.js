/**
 * Created by yogprakash on 6/5/17.
 */
import ip from 'icepick';
import {
    TEKION_GET_GRAPH_CONFIG_SUCCESS,
    TEKION_SET_GRAPH_CONFIG,
} from './constants';

const initialState = ip.freeze({
    graphData: [],
    value :"Service Advisor",
    setGraphConfigStatus: null,
    fetchGraphConfigStatus: null,
    setGraphConfigError: null,
    fetchGraphConfigError: null,
});

export default function (state = initialState, action) {
    switch (action.type) {
        // case TEKION_GET_GRAPH_CONFIG_REQUEST: {
        //     console.log("result--->",action)
        //     state = ip.set(state, 'fetchGraphConfigError', null);
        //     state = ip.set(state, 'fetchGraphConfigStatus', 'fetching');
        //     state = ip.set(state, 'graphData', null);
        //     return state;
        // }

        case TEKION_GET_GRAPH_CONFIG_SUCCESS: {
            // const indexedGraphObj = action.payload.reduce((acc, indexedGraphObj) => {
            //     acc[indexedGraphObj.jobTitle] = indexedGraphObj;
            //     return acc
            // }, {});
            state = ip.set(state, 'fetchGraphConfigError', null);
            state = ip.set(state, 'fetchGraphConfigStatus', 'success');
            state = ip.set(state, 'graphData', ip.freeze(action.payload));
            return state;
        }

        // case TEKION_GET_GRAPH_CONFIG_FAILURE:
        // {
        //     state = ip.set(state, 'fetchGraphConfigError', action.payload.meta.msg);
        //     state = ip.set(state, 'fetchGraphConfigStatus', 'failed');
        //     return state;
        // }

        case TEKION_SET_GRAPH_CONFIG: {
            state = ip.set(state, 'value', ip.freeze(action.payload));
            return state;
        }

        // case TEKION_SET_GRAPH_CONFIG_SUCCESS: {
        //     const indexedGraphObj = action.payload.data.reduce((acc, loanerVehicleAggrementObj) => {
        //         acc[loanerVehicleAggrementObj.loanerVehicleAgreementId] = loanerVehicleAggrementObj;
        //         return acc
        //     }, {});
        //     state = ip.set(state, 'setGraphConfigError', null);
        //     state = ip.set(state, 'setGraphConfigStatus', 'success');
        //     state = ip.set(state, 'entities', ip.freeze(indexedGraphObj));
        //     return state;
        // }
        //
        // case TTEKION_SET_GRAPH_CONFIG_FAILURE:
        // {
        //     state = ip.set(state, 'setGraphConfigError', action.payload.meta.msg);
        //     state = ip.set(state, 'setGraphConfigStatus', 'failed');
        //     return state;
        // }

        default:
            return state;
    }
}