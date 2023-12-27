import React from "react";
import Image from "next/image";
import Styles from "../styles/MainBenner.module.css";
import DrMinbennerDp from "../../../public/images/DrDp.png";

const MinBenner = () => {
  return (
    <div className={Styles.MinBenner}>
      <div className={Styles.Container}>
        <div className={Styles.Top}>
          <div className={Styles.MainBennerLeft}>
            <h1 className={Styles.Title}>Dedicated to Hope, Healing & Recovery</h1>
            <p className={Styles.SubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a grav ida sapien. Suspendisse porttitor lectus at mauris
              convallis pellen tesque. Aliquam in nisi .
            </p>
            <button className={Styles.MeetBtn}>Meet Our Specialist</button>
          </div>
          <div className={Styles.MainBennerRight}>
            <div className={Styles.Ring}>
              <Image className={Styles.DrMinbennerDp} src={DrMinbennerDp} alt="Dr's Photo" />
            </div>
          </div>
        </div>

        <div className={Styles.Rates}>
          <div className={Styles.InnerRates}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1078" height="145" viewBox="0 0 1078 145" fill="none">
              <path d="M106.009 17.9647C115.509 6.58067 129.571 0 144.398 0H1078V145H0L106.009 17.9647Z" fill="white" />
            </svg>

            <div className={Styles.SubRatesOuter}>
              <div className={Styles.SubRates}>
                <div className={Styles.HeartOuter}>
                  <svg className={Styles.Heart} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <g clip-path="url(#clip0_53_348)">
                      <path
                        d="M53.3402 10.1934C47.0322 3.26979 36.7705 3.26979 30.4642 10.1934L28.9995 11.8006L27.5356 10.1934C21.2293 3.26886 10.9667 3.26886 4.66047 10.1934C-1.51774 16.9765 -1.55786 27.7284 4.56743 35.204C10.1541 42.0199 26.6308 56.7453 27.3299 57.3685C27.7854 57.7764 28.3553 57.9988 28.9431 57.9982L28.9986 57.9973C29.5859 58.0273 30.1774 57.8061 30.6674 57.3685C31.3664 56.7453 47.8448 42.0199 53.4332 35.2031C59.5576 27.7284 59.5175 16.9765 53.3402 10.1934ZM49.6262 31.4423C45.2704 36.755 33.2972 47.7121 28.9986 51.6003C24.7 47.7131 12.7294 36.7569 8.3744 31.4432C4.10138 26.229 4.06126 18.803 8.28136 14.1698C10.4367 11.8044 13.2671 10.6208 16.0976 10.6208C18.9281 10.6208 21.7585 11.8035 23.9138 14.1698L27.1335 17.7047C27.5063 18.1116 27.9873 18.3778 28.507 18.4647C28.9261 18.5644 29.3614 18.5472 29.773 18.4146C30.1845 18.282 30.5592 18.0382 30.8628 17.7056L34.0842 14.1698C38.3957 9.43809 45.4087 9.43903 49.7176 14.1698C53.9377 18.803 53.8976 26.229 49.6262 31.4423Z"
                        fill="#FCF6F6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_53_348">
                        <rect width="58" height="58" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={Styles.RatesTitle}>
                  <span className={Styles.Counts}>262K+</span>
                  <p className={Styles.CountsAbout}>Recovered Patients</p>
                </div>
              </div>

              <div className={Styles.SubRates}>
                <div className={Styles.SmileyOuter}>
                  <svg className={Styles.Smiley} xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <g clip-path="url(#clip0_53_361)">
                      <path
                        d="M29 0C12.9837 0 0 12.9837 0 29C0 45.0163 12.9837 58 29 58C45.0163 58 58 45.0163 58 29C58 12.9837 45.0163 0 29 0ZM29 54.375C14.9858 54.375 3.625 43.0142 3.625 29C3.625 14.9858 14.9858 3.625 29 3.625C43.0142 3.625 54.375 14.9858 54.375 29C54.375 43.0142 43.0142 54.375 29 54.375Z"
                        fill="#FFFAFA"
                      />
                      <path
                        d="M19.9375 23.5625C21.9395 23.5625 23.5625 21.9395 23.5625 19.9375C23.5625 17.9355 21.9395 16.3125 19.9375 16.3125C17.9355 16.3125 16.3125 17.9355 16.3125 19.9375C16.3125 21.9395 17.9355 23.5625 19.9375 23.5625Z"
                        fill="#FFFAFA"
                      />
                      <path
                        d="M38.0625 23.5625C40.0645 23.5625 41.6875 21.9395 41.6875 19.9375C41.6875 17.9355 40.0645 16.3125 38.0625 16.3125C36.0605 16.3125 34.4375 17.9355 34.4375 19.9375C34.4375 21.9395 36.0605 23.5625 38.0625 23.5625Z"
                        fill="#FFFAFA"
                      />
                      <path
                        d="M41.6875 29C41.6875 36.0071 36.0071 41.6875 29 41.6875C21.9929 41.6875 16.3125 36.0071 16.3125 29H12.6875C12.6875 38.0091 19.9909 45.3125 29 45.3125C38.0091 45.3125 45.3125 38.0091 45.3125 29H41.6875Z"
                        fill="#FFFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_53_361">
                        <rect width="58" height="58" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={Styles.RatesTitle}>
                  <span className={Styles.Counts}>94%</span>
                  <p className={Styles.CountsAbout}>Satisfactian Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinBenner;
