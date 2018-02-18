import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';
// react plugin for creating charts

import {MessageList,Message,MessageText,MessageGroup,TextComposer,Row,AddIcon,IconButton,TextInput,SendButton,EmojiIcon} from "@livechat/ui-kit"
import {
    Grid,Card
} from 'material-ui';
import {
    RegularCard, Button, CustomInput, ItemGrid
} from 'components';

import {connect} from "react-redux"

import {UserActionCreators} from "actions"
import {UserList} from "components";
import {Subscribe} from "utils";
import update from 'immutability-helper';

class Dashboard extends React.Component{
    constructor(){
        super();
    }

    handleSubmit(){
        console.log("Server sending");
    }

    componentDidMount(){
        this.props.fetchUsers();
        Subscribe.register([
            {route: 'http://localhost/janus/topic/users', callback: this.updateList},
        ]);

    }

    updateList = (data) => {
         update(this.props.users, {$set: data});
    }



    render(){

        var userList = this.props.users.map((user) => {
            return <UserList email={user}/>
        });

        return (
            <div>

                    <Grid container>
                        <ItemGrid xs={12} sm={12} md={6}>
                            <Card>
                                <div style={{height: 255, marginBottom:90}}>
                                    <MessageList active>
                                        <MessageGroup>
                                            <Message
                                                authorName="Jon Smith"
                                                date="21:37"
                                                avatarUrl={
                                                    'https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg'
                                                }
                                            >
                                                <MessageText>
                                                    The fastest way to help your customers - start chatting with visitors
                                                </MessageText>
                                            </Message>
                                        </MessageGroup>
                                        <MessageGroup>
                                            <Message
                                                authorName="Jon Smith"
                                                date="21:37"
                                                avatarUrl={
                                                    'https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg'
                                                }
                                            >
                                                <MessageText>
                                                    The fastest way to help your customers - start chatting with visitors
                                                </MessageText>
                                                <MessageText>
                                                    The fastest way to help your customers - start chatting with visitors
                                                </MessageText>
                                            </Message>
                                        </MessageGroup>
                                    </MessageList>
                                    <TextComposer onButtonClick={this.handleSubmit.bind(this)}>
                                        <Row align="center">
                                            <IconButton fit>
                                                <AddIcon />
                                            </IconButton>
                                            <TextInput fill />
                                            <SendButton />
                                        </Row>

                                        <Row verticalAlign="center" justify="right">
                                            <IconButton fit>
                                                <EmojiIcon />
                                            </IconButton>
                                        </Row>
                                    </TextComposer>
                                </div>
                            </Card>
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={6}>
                            {userList}
                        </ItemGrid>
                    </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
    {
        users: state.users
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        fetchUsers: (values) => dispatch(
            UserActionCreators.fetchUser()
        )
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

