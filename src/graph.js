/**
 * Created by yogprakash on 5/18/17.
 */
import React from "react";
import {connect} from "react-redux";
import {setGraphConfig, getGraphConfig} from "./action";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import "./graph.css";

class Graph extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.props.getGraphConfig(nextProps.value);
        }
    }

    handleChange = (event, index, value) => {
        this.props.setGraphConfig(value)
    };

    componentDidMount() {
        this.props.getGraphConfig(this.props.value);
    }

    render() {
        const {graphData} =this.props;
        return (
            <div className="graphWrapper row">
                <DropDownMenu value={this.props.value} onChange={this.handleChange} openImmediately={false}>
                    <MenuItem value="Service Advisor" primaryText="Service Advisor"/>
                    <MenuItem value="Technician" primaryText="Technician"/>
                    <MenuItem value="Parts Clerk" primaryText="Parts Clerk"/>
                </DropDownMenu>
                {  graphData && graphData.map((data) => {
                    return (
                        <div className="flex-container" key={data.viewPort}
                             style={{width: data.width, height: data.height}}>
                            {data.jobTitle}
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        graphData: state.graphData
    };
};

export default connect(mapStateToProps, {
    setGraphConfig,
    getGraphConfig,
})(Graph);
