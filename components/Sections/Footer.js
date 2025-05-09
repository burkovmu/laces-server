import style from "styles/Footer.module.scss";
import { useAppContext } from "context/state";
// import Link from "next/link";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Wrapper from "../Wrapper";

import FooterM from "./FooterMob";

export default function Footer() {
  const { links } = useAppContext();
  return (
    <>
      <footer className={style.footer}>
        <Wrapper>
          <div className={style.container}>
            <img src="/logo_f.svg" alt="" />
            <div className="footer_wrap">
              {links.map((link, index) => {
                const { href, title } = link;
                return (
                  <Link
                    key={index}
                    smooth={true}
                    offset={-105}
                    duration={800}
                    to={href}
                    className={style.link}
                    style={{ cursor: "pointer" }}
                  >
                    {title}
                  </Link>
                );
              })}{" "}
            </div>

            <div className={style.sociol_cont}>
              <div className={style.inst}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  href={`${process.env.TG}`}
                  target="_blank"
                >
                  <img src="/tg.svg" alt="telegram svg" />
                </a>
              </div>

              <div className={style.inst}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  href={`${process.env.VK}`}
                  target="_blank"
                >
                  <img src="/vk.svg" alt="vkontakte svg" />
                </a>
              </div>

              <div className={style.inst}>
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  href={`${process.env.WHATSAPP}`}
                  target="_blank"
                >
                  <img src="/whatsapp.svg" alt="whatsapp svg" />
                </a>
              </div>

              <a className={style.text_p} href={`tel:${process.env.PHONE}`}>
                {process.env.PHONE_MASK}
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
      <FooterM className={style.mb} />
    </>
  );
}
