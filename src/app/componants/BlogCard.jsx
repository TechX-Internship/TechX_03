import React from "react";
import Image from "next/image";
import Styles from "../styles/BlogCard.module.css";
import BlogUpdateBy from "./BlogUpdateBy";

import Img1 from "../../../public/blog1.png";
import Img2 from "../../../public/blog2.png";
import Img3 from "../../../public/blog3.png";

const BlogCard = () => {
  return (
    <div className="col-4">
      <Image src={Img1} alt="" />
      <div className="p-3">
        <BlogUpdateBy />
        <h4 className={Styles.Title}>How to Determine the Length of a Time - Out</h4>
        <p className={Styles.SubTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. </p>
        <button className={Styles.Btn}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
