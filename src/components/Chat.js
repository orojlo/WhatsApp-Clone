import React from "react";
import { useHistory, useParams } from "react-router";
import "./Chat.css";
import useRoom from '../hooks/useRoom';
import ChatMessages from './ChatMessages';
import ChatFooter from './ChatFooter';
import MediaPreview from './MediaPreview';
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AddPhotoAlternate, ArrowBack, MoreVert } from "@material-ui/icons";


export default function Chat([user, page]) {
  const { roomId } = useParams()
  const history = useHistory()

  const room = useRoom(roomId, user.uid)



  return <div className="chat">
    <div style={{ height: page.height }}
    className="chat__background" />

    <div className="chat__header">
      {page.isMobile && (
        <IconButton onClick={ history.goBack }>
           <ArrowBack />
        </IconButton>
      )}
      <div className="avatar__container">
        <Avatar src={room?.photoUrl} />
      </div>
      <div className="chat__header--info">
        <h3 style={{  width: page.isMobile && page.width - 165 }}
        >{room?.name}</h3>
      </div>

      <div className="chat__header--right">
        <input 
          id="image"
          style={{ display: 'none'}}
          accept="image/*"
          type="file"
        />
        <IconButton>
          <label style={{ cursor: 'pointer', height: 24 }}
          htmlFor="image">
            <AddPhotoAlternate />
          </label>
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
        <Menu
          id="menu"
          keepMounted
          open={false}
        >
          <MenuItem>Delete Room</MenuItem>
        </Menu>
      </div>
    </div>

    <div className="chat__body--container">
      <div className="chat__body" style={{ height: page.height
       - 68 }}>
         <ChatMessages />
       </div>
    </div>

    <MediaPreview />


    <ChatFooter />
  </div>;
}
