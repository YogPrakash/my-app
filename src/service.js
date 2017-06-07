/**
 * Created by yogprakash on 6/5/17.
 */
import graphData from "./graphData"

const TIMEOUT = 100;

const getGraphDetails = (id, cb, timeout) =>
    setTimeout(() => cb(graphData[id]), timeout || TIMEOUT);

export default { getGraphDetails };