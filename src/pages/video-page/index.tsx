import React, { FC, useEffect, useRef } from 'react'
import TCPlayer from 'tcplayer.js'
import 'tcplayer.js/dist/tcplayer.min.css'

const VideoPage: FC = () => {
  const myRef = useRef(null)
  useEffect(() => {
    // player-container-id 为播放器容器 ID，必须与 html 中一致
    const player = TCPlayer(myRef.current, {
      sources: [{
        src: 'webrtc://www.geekedu.fun/live/obspush', // 播放地址
      }],
    })
    player.on('loadedmetadata', () => {
      console.log('loadedmetadata');
    })
  }, [])

  // player.src(url); // url 播放地址
  return (
    <>
      <div className="App">
        <video ref={myRef} id="player-container-id" width="900" height="600" preload="auto" playsInline webkit-playsinline="true"></video>
      </div>
    </>
  )
}

export default VideoPage
