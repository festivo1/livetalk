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

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>

                    <Grid container>
                        <ItemGrid xs={12} sm={12} md={6}>
                            <Card>
                                <div style={{height: 255, marginBottom:90}}>
                                    <MessageList active>
                                        <MessageGroup onlyFirstWithMeta>
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
                                        <MessageGroup onlyFirstWithMeta>
                                            <Message date="21:38" isOwn={true} authorName="Visitor">
                                                <MessageText>
                                                    I love them
                                                </MessageText>
                                            </Message>
                                            <Message date="21:38" isOwn={true} authorName="Visitor">
                                                <MessageText>This helps me a lot</MessageText>
                                            </Message>
                                        </MessageGroup>
                                    </MessageList>
                                    <TextComposer>
                                        <Row align="center">
                                            <IconButton fit>
                                                <AddIcon />
                                            </IconButton>
                                            <TextInput fill />
                                            <SendButton fit />
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

                        </ItemGrid>
                    </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Dashboard;
