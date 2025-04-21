
import style from "styles/OurCar2.module.scss";

export default function CloseUpCarousel() {
  return (
    <div className={style.container}>
      <div className={style.flex_container_1}>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_1.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_2.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_2}>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_3.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_4.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_3}>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_5.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="close_up_renders/close_up_6.png" alt="" />
        </div>
      </div>
    </div>
  );
}
