
import style from "styles/OurCar2.module.scss";

export default function May2023Carousel() {
  return (
    <div className={style.container}>
      <div className={style.flex_container_1}>
        <div className={style.img_cont}>
          <img src="may_2023/may_1_2023.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="may_2023/may_2_2023.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_2}>
        <div className={style.img_cont}>
          <img src="may_2023/may_3_2023.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="may_2023/may_4_2023.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_3}>
        <div className={style.img_cont}>
          <img src="may_2023/may_5_2023.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="may_2023/may_6_2023.png" alt="" />
        </div>
      </div>
    </div>
  );
}
