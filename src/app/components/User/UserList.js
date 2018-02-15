
import React from "react";
import {List,ListItem,ListItemText,Divider} from "material-ui"

class UserList extends React.Component {

    render(){
        const {firstName, email} = this.props;
        return (
            <div>
                <List key={email} component="nav">
                    <ListItem button component="a" href="#simple-list">
                        <ListItemText primary={firstName} />
                    </ListItem>
                </List>
                <Divider />
            </div>
        );
    }

}

export default UserList;