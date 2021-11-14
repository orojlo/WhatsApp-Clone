import React from "react";
import { useParams } from "react-router";
import "./Chat.css";
import useRoom from '../hooks/useRoom';


export default function Chat([user, page]) {
  const { roomId } = useParams()


  const room = useRoom(roomId, user.uid)

  console.log({ room });


  return <div className="chat">Chat</div>;
}
