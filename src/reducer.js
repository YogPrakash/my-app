/**
 * Created by yogprakash on 6/5/17.
 */
import ip from 'icepick';
import {
    GET_GRAPH_CONFIG_SUCCESS,
    SET_GRAPH_CONFIG,
} from './constants';

const initialState = ip.freeze({
    graphData: [],
    value: "Service Advisor",
    setGraphConfigStatus: null,
    fetchGraphConfigStatus: null,
    setGraphConfigError: null,
    fetchGraphConfigError: null,
});

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_GRAPH_CONFIG_SUCCESS: {
            state = ip.set(state, 'fetchGraphConfigError', null);
            state = ip.set(state, 'fetchGraphConfigStatus', 'success');
            state = ip.set(state, 'graphData', ip.freeze(action.payload));
            return state;
        }

        case SET_GRAPH_CONFIG: {
            state = ip.set(state, 'value', ip.freeze(action.payload));
            return state;
        }

        default:
            return state;
    }
}