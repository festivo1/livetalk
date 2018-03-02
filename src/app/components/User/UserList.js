
import React from "react";
import PropTypes from "prop-types";
import {List,ListItem,ListItemText,Divider} from "material-ui"

class UserList extends React.Component {

    render(){
        const {email,listCallback} = this.props;
        return (
            <div>
                <List key={email} component="nav">
                    <ListItem button onClick={listCallback.bind(null,email)} component="a" href="#">
                        <ListItemText primary={email} />
                    </ListItem>
                </List>
                <Divider />
            </div>
        );
    }

}

export default UserList;