
import style from "styles/OurCar2.module.scss";

export default function Sept2022Carousel() {
  return (
    <div className={style.container}>
      <div className={style.flex_container_1}>
        <div className={style.img_cont}>
          <img src="september_2022/sept_1_2022.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="september_2022/sept_2_2022.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_2}>
        <div className={style.img_cont}>
          <img src="september_2022/sept_3_2022.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="september_2022/sept_4_2022.png" alt="" />
        </div>
      </div>
      <div className={style.flex_container_3}>
        <div className={style.img_cont}>
          <img src="september_2022/sept_5_2022.png" alt="" />
        </div>
        <div className={style.img_cont}>
          <img src="september_2022/sept_6_2022.png" alt="" />
        </div>
      </div>
    </div>
  );
}
