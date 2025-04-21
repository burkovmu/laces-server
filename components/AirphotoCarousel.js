import style from "styles/AirGal.module.scss";
import { useLayoutEffect, useState, useEffect, createRef } from "react";



export default function AirphotoCarousel() {
  const [isPlayed, setIsPlayed] = useState(false);

  const video = createRef();

  const onClick = () => {
    setIsPlayed(prev => !prev)
  }

  useEffect(() => {
    if (video.current) {
      if (isPlayed) {
        video.current.play()
      } else {
        video.current.pause()
      }
    }
  }, [isPlayed, video.current])

  return (
    <div className={style.airPhoto}>
      <div className={style.video_container}>
          <video
            onClick={onClick}
            className={style.video}
            src="/video.mp4"
            controls
            ref={video}
            style={{visibility: !isPlayed ? 'hidden' : 'initial'}}
            // poster="/video_bg.png"
            // /playVideo.png
          />
          {!isPlayed ? (
            <div onClick={onClick} className={style.btns}>
              <div>
                {" "}
                <img className={style.show} src="/video_bg.png" alt="" />
                <img className ={style.btn_img}  src="/playVideo.png" alt="" />
              </div>
            </div>
          ) : null}
      </div>
    </div>
  );
}
