import { CancelRounded, CheckCircleRounded, MicRounded, Send } from "@material-ui/icons";
import React from "react";
import "./ChatFooter.css";
import recordAudio from "./recordAudio";


export default function ChatFooter({
  input,
  onChange,
  sendMessage,
  image,
  user,
  room,
  roomId,
  setAudioId,
}) {
  const [isRecording, setRecording] = React.useState(false);
  const [duration, setDuration] = React.useState(false);

  
  const timerInterval = React.useRef();
  const recordingEl = React.useRef();
  const record = React.useRef();
  const inputRef = React.useRef();

  async function startRecording(event) {
    event.preventDefault();
    record.current = await recordAudio()
    inputRef.current.focus();
    inputRef.current.style.width = 'calc(100% - 56px)';
    setRecording(true);
    setAudioId('');
    
  }

  React.useEffect(() => {
    if (isRecording) {
      recordingEl.current.style.opacity = "1";
      startTimer();
      record.current.start();
    }
  }, [isRecording]);

  function startTimer() {
    const start = Date.now();
    timerInterval.current = setInterval(setTime, 100)


    function setTime() {
      const timeElapsed = Date.now() - start;
      const totalSeconds = Math.floor(timeElapsed / 1000);
      const minutes = pad(parseInt(totalSeconds / 60));
      const seconds = pad(parseInt(totalSeconds % 60));
      const duration = `${minutes}:${seconds}`;
      setDuration(duration);
    }
  }

  function pad(value) {
    return String(value).length < 2 ? `0${value}` : value;
  }



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


    const canRecord = navigator.mediaDevices.getUserMedia && window.MediaRecorder;



  return <div className="chat__footer">
    <form>
      <input
      ref={inputRef}
      value={input}
      onChange={!isRecording ? onchange : null}
      placeholder="Type a message"
      />


      {canRecord ? (
        <button
          onClick={
            input.trim() || (input === "" && image)
            ? sendMessage
            : startRecording
          }
        
        type="submit" className="send__btn">
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
      <div ref={recordingEl} className="record">
        <CancelRounded
          style={{
            width: 30,
            height: 30,
            color: '#f20519'
          }}
        />
        <div>
          <div className="record__redcircle" />
          <div className="record__duration">{duration}</div>
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
