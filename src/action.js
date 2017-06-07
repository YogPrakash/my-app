/**
 * Created by yogprakash on 6/5/17.
 */
import {createAction} from "redux-actions";
// import ip from "icepick";
 //import Services from "./service";
import {
  //  TEKION_GET_GRAPH_CONFIG_REQUEST,
    TEKION_GET_GRAPH_CONFIG_SUCCESS,
  //  TEKION_GET_GRAPH_CONFIG_FAILURE,
    TEKION_SET_GRAPH_CONFIG,
    // TEKION_SET_GRAPH_CONFIG_SUCCESS,
    // TEKION_SET_GRAPH_CONFIG_REQUEST
} from "./constants";
import data from "./grapgData"

//const getGraphConfigRequest = createAction(TEKION_GET_GRAPH_CONFIG_REQUEST);
const getGraphConfigSuccess = createAction(TEKION_GET_GRAPH_CONFIG_SUCCESS);
//const getGraphConfigFailure = createAction(TEKION_GET_GRAPH_CONFIG_FAILURE);

export const setGraphConfig = createAction(TEKION_SET_GRAPH_CONFIG);
// const setGraphConfigSuccess = createAction(TEKION_SET_GRAPH_CONFIG_SUCCESS);
// const setGraphConfigFailure = createAction(TTEKION_SET_GRAPH_CONFIG_FAILURE);

// export function setGraphConfig(value) {
//     return (async(dispatch) => {
//         value = ip.freeze(value);
//         data =
//         dispatch(setGraphConfigRequest());
//         const { response} = await Services.setGraphConfig(config, graphData);
//         if (response) {
//             dispatch(setGraphConfigSuccess(response));
//         }
//         if (error) {
//             dispatch(setGraphConfigFailure(error));
//         }
//     });
// }

export function getGraphConfig(jobTitle) {
    return ((dispatch) => {
        const response =data[jobTitle]
        if (response) {
            dispatch(getGraphConfigSuccess(response));
        }
    });
}

