
import style from "styles/OurCar2.module.scss";

export default function BirdEyeCarousel() {
  return (
    <div className={style.container}>
      <div className={style.flex_container_1}>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_1.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_2.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_2}>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_3.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_4.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_3}>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_5.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="bird_eye_renders/bird_eye_6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
