import React from "react";
import Styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import Ellipse4 from "../../../public/Ellipse4.svg";
import Ellipse from "../../../public/Ellipse10.png";

const AboutUs = () => {
  return (
    <div className={"Container"}>
      <div className={Styles.AboutContainer}>
        <div className={Styles.AboutUsOuter}>
          <div className={Styles.AboutUsImageDiv}>
            <Image className={Styles.AboutUsImage} src={Ellipse} alt="" />
            <div className={Styles.Years}>
              <div className={Styles.YearText}>
                <span className={Styles.YearCount}>24+</span> <br />
                <span className={Styles.YearName}>Years</span>
              </div>
            </div>
          </div>
          <div className={Styles.AboutUsInfoDiv}>
            <span className={Styles.AboutInfoTitle}>About Us</span>
            <p className={Styles.AboutInfoSubtitle}>We Are Always Ensure Best Medical Treatment</p>
            <p className={Styles.AboutInfoText}>
              Vestibulum mollis convallis velit sed commodo. Morbi gravida, nunc sed tempor egestas, risus est facilisis urna, in dignissim
              tellus ex quis tellus. Sed euismod volutpat lacus, ut dignissim turpis elementum eu. Aenean condimentum luctus
              scelerisque.Vestibulum mollis convallis velit sed commodo. Morbi gravida.
            </p>
            <div className={Styles.AboutInfoBlog}>
              <Image className={Styles.Ellipse4} src={Ellipse4} alt="" />
              <div className={Styles.AboutInfoBlogText}>
                <span className={Styles.AboutInfoBlogBoldtext}>“There are many variations</span> of passages of the <br /> lorem ipsum
                available, but the majority have a <br /> suffered antirationing Sime form.”
              </div>
            </div>
            <button className={Styles.AboutUsBtn}>More About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
