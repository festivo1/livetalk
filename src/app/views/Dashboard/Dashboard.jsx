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
    }
    render(){
        return (
            <div>
                <h1>Welcome Dashboard</h1>
                    <div>


                    </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
