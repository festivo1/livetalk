import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';
// react plugin for creating charts



import { dashboardStyle } from 'variables';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0,
        };
    }
    handleChange() {
        this.setState({ value });
    };

    handleChangeIndex() {
        this.setState({ value: index });
    };
    render(){
        return (
            <div>
                <h1>Welcome Dashboard</h1>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
