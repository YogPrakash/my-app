/**
 * Created by yogprakash on 6/5/17.
 */
import {createAction} from "redux-actions";
import {
    GET_GRAPH_CONFIG_SUCCESS,
    SET_GRAPH_CONFIG,
} from "./constants";
import data from "./graphData"

const getGraphConfigSuccess = createAction(GET_GRAPH_CONFIG_SUCCESS);

export const setGraphConfig = createAction(SET_GRAPH_CONFIG);

export function getGraphConfig(jobTitle) {
    return ((dispatch) => {
        const response = data[jobTitle]
        if (response) {
            dispatch(getGraphConfigSuccess(response));
        }
    });
}

