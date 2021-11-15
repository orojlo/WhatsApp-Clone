import { CancelRounded, CheckCircleRounded, MicRounded, Send } from "@material-ui/icons";
import React from "react";
import "./ChatFooter.css";

export default function ChatFooter() {
  const [isRecording, setRecording] = React.useState(false)

  const btnIcon = (
    <>
    <Send style={{
      width: 20,
      height: 20,
      color: "white"
    }} />
    <MicRounded style={{
      width: 20,
      height: 20,
      color: "white"
    }} />
    </>
  )


    const canRecord = navigator.mediaDevices.getUserMedia &&
    window.MediaRecorder;



  return <div className="chat__footer">
    <form>
      <input
        placeholder="Type A Message"
      />


      {canRecord ? (
        <button type="submit" className="send__btn">
          {btnIcon}
        </button>
      ) : (
        <>
          <label htmlFor="capture" className="send__btn">
            {btnIcon}
          </label>
          <input
            style={{display: 'none'}}
            type="file"
            id="capture"
            accept="audio/*"
            capture
          
          />
        </>
      )}
    </form>



    {isRecording && (
      <div className="record">
        <CancelRounded
          style={{
            width: 30,
            height: 30,
            color: '#f20519'
          }}
        />
        <div>
          <div className="record__redcircle" />
          <div className="record__duration"  />
        </div>
        <CheckCircleRounded
          style={{
            width: 30,
            height: 30,
            color: '#41bf49'
          }}  
        />
      </div>
    )}
  </div>;
}
