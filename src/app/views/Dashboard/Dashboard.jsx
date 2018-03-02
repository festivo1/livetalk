import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';
// react plugin for creating charts

import {MessageList,TextComposer,Row,AddIcon,IconButton,TextInput,SendButton,EmojiIcon} from "@livechat/ui-kit"

import {ChatMessage} from "components";

import {
    Grid,Card
} from 'material-ui';
import {
    RegularCard, Button, CustomInput, ItemGrid
} from 'components';

import {connect} from "react-redux"
import uuid from "uuid"

import {UserActionCreators} from "actions"
import {UserList} from "components";
import {Subscribe} from "utils";
import {MessageActionCreator} from "actions";
const dateConfig = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
};

class Dashboard extends React.Component{
    constructor(){
        super();
    }

    handleSubmit(event){
        var msg = {id:'',text:'', date:new Date().toLocaleDateString("en-US",dateConfig), parent:'', recipient:''};
        msg['text'] = this.text.value;
        var lastMessage = this.props.messages[this.props.messages.length - 1];
        let parent = (lastMessage!= undefined && 'parent' in lastMessage) ? lastMessage['parent'] : '';
        console.log(parent);
        msg['parent'] = parent;
        msg['uuid'] = uuid.v4();
        msg['recipient'] = this.props.selected.user;
        this.props.sendMessage(msg);
    }

    listCallbacks(email){
       this.props.fetchMessage(localStorage.getItem("username"),email);
       this.props.selectUser({user:email,select:true});
    }

    componentDidMount(){
        this.props.fetchUsers();
        Subscribe.register([
            {route: '/topic/users', callback: this.updateList},
        ]);

    }

    updateList = (data) => {
        if(localStorage.getItem("username") != data.body){
            this.props.updateUsers(data.body);
        }
    }



    render(){

        var userList = this.props.users.map((user) => {
            if(user!=localStorage.getItem("username")){
                return <UserList listCallback={this.listCallbacks.bind(this)}  key={user} email={user}/>
            }
        });

        var messageList = this.props.messages.map((message) => {
                return <ChatMessage message={message} key={message.id}/>
        });

        return (
            <div>

                    <Grid container>
                        <ItemGrid xs={12} sm={12} md={6}>
                            { (this.props.selected.select) ?
                                <Card>
                                    <div style={{height: 255, marginBottom: 90}}>
                                        <MessageList active>
                                            {messageList}
                                        </MessageList>
                                        <TextComposer onButtonClick={this.handleSubmit.bind(this)}>
                                            <Row align="center">
                                                <IconButton>
                                                    <AddIcon/>
                                                </IconButton>
                                                <TextInput innerRef={(input) => {
                                                    this.text = input
                                                }}/>
                                                <SendButton/>
                                            </Row>

                                            <Row verticalAlign="center" justify="right">
                                                <IconButton fit>
                                                    <EmojiIcon/>
                                                </IconButton>
                                            </Row>
                                        </TextComposer>
                                    </div>
                                </Card> : ''
                            }
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
    users: PropTypes.array.isRequired,
    fetchMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
    {
        users: state.users,
        selected:state.selected,
        messages: state.message
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        fetchUsers: () => dispatch(
            UserActionCreators.fetchUser()
        ),
        updateUsers:(values) => dispatch(
            UserActionCreators.updateUser(values)
        ),
        fetchMessage: (creator, recipient) => dispatch(
            MessageActionCreator.fetchMessage(creator,recipient)
        ),
        selectUser:(user) => dispatch(
            MessageActionCreator.selectUser(user)
        ),
        sendMessage:(message) => dispatch(
            MessageActionCreator.sendMessage(message)
        )
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

