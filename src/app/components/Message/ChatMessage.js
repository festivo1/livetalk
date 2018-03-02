import React from "react";
import PropTypes from "prop-types";
import {Message,MessageText,MessageGroup,TextComposer,Row,AddIcon,IconButton,TextInput,SendButton,EmojiIcon} from "@livechat/ui-kit";

class ChatMessage extends React.Component {
    render(){
        const {message} = this.props;
        return(
            <div>
                <MessageGroup>
                    <Message
                        authorName={message.creator}
                        date={message.date}
                        avatarUrl={
                            'https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg'
                        }
                    >
                        <MessageText>
                            {message.text}
                        </MessageText>
                    </Message>
                </MessageGroup>
            </div>
        )
    }
}

ChatMessage.propTypes = {
    message: PropTypes.shape({
            text:PropTypes.string,
            date:PropTypes.string,
            creator:PropTypes.string,
            recipient:PropTypes.string
    }).isRequired
}

export default ChatMessage;