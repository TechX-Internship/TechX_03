import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Styles.FooterRed}>
        <div className="Container">
          <div className={Styles.Inner}>
            <div className={Styles.RedLeft}>
              <h4 className={Styles.Title}>Subscribe Newsletter</h4>
              <p className={Styles.SubTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has took a galley of type and
                scrambled book.
              </p>
            </div>
            <div className={Styles.RedRight}>
              <input className={Styles.InputEmail} type="email" placeholder="Your Email Address....." />
              <button className={Styles.Btn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.FooterBlue}>
        <div className="Container">
          <div className={Styles.Inner}>
            <div className={Styles.BlueLeft}>
              <Image src={Logo} alt="" />
              <p className={Styles.Address}>207,208 Vasupujya Complex, Opp. Trinity Mall, Adajan, Surat - 395009, Gujarat,India</p>
              <div className={Styles.SocDiv}>
                <svg className={Styles.SocMedia} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="white" />
                </svg>
                <svg className={Styles.SocMedia} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="white" />
                </svg>
                <svg className={Styles.SocMedia} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="white" />
                </svg>
                <svg className={Styles.SocMedia} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="white" />
                </svg>
              </div>
            </div>
            <div className={Styles.BlueRight}>
              <ul>
                <li className={Styles.Ul}>Pages</li>
                <li className={Styles.Li}>About Us</li>
                <li className={Styles.Li}>Our Services</li>
                <li className={Styles.Li}>Our Gallery</li>
                <li className={Styles.Li}>Our Blog</li>
              </ul>
              <ul>
                <li className={Styles.Ul}>Department</li>
                <li className={Styles.Li}>Quick Links </li>
                <li className={Styles.Li}>Our Services</li>
                <li className={Styles.Li}>Our Gallery</li>
                <li className={Styles.Li}>Appointment</li>
                <li className={Styles.Li}>Privacy Policy</li>
              </ul>
              <ul>
                <li className={Styles.Ul}>Links</li>
                <li className={Styles.Li}>Useful Links</li>
                <li className={Styles.Li}>Privacy Policy</li>
                <li className={Styles.Li}>Terms and Conditions</li>
                <li className={Styles.Li}>Discaimer</li>
                <li className={Styles.Li}>Support</li>
                <li className={Styles.Li}>FAQ</li>
              </ul>
              <ul>
                <li className={Styles.Ul}>Opening Hours</li>
                <li className={Styles.Li}>Mon to Tues - 8AM to 5PM</li>
                <li className={Styles.Li}>Wed to Thu - 9AM to 6PM</li>
                <li className={Styles.Li}>Fri to Sat - 8AM to 5PM</li>
                <li className={Styles.Li}>Sunday - Emergency Only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
