import React from "react";
import Image from "next/image";
import Styles from "../styles/ReviewsCard.module.css";

import Img1 from "../../../public/Reviews1.png";
import Img2 from "../../../public/Reviews2.png";
import Img3 from "../../../public/Reviews3.png";

const ReviewsCard = () => {
  return (
    <div className="col-4">
      <div className="d-flex align-center py-2">
        <Image src={Img1} alt="" />

        <div className="ps-3">
          <div className={Styles.Title}>Hanna Philips</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 100 18" fill="none">
            <path
              d="M18.4619 6.61421C18.3882 6.38836 18.2528 6.18761 18.071 6.03465C17.8892 5.88169 17.6683 5.78261 17.4332 5.74858L12.5701 5.04194L10.397 0.651123C9.96676 -0.217041 8.54469 -0.217041 8.11441 0.651123L5.94137 5.04194L1.0898 5.74858C0.854819 5.78311 0.634142 5.88256 0.452632 6.03574C0.271122 6.18892 0.135991 6.38974 0.0624602 6.61558C-0.0110676 6.84124 -0.0198664 7.08299 0.0370625 7.3134C0.0939913 7.54381 0.214368 7.75364 0.38453 7.91909L3.90328 11.3488L3.0732 16.1876C3.03325 16.422 3.05951 16.6628 3.14902 16.8829C3.23853 17.1031 3.38774 17.294 3.57984 17.4339C3.77249 17.5731 4.00012 17.6557 4.23715 17.6726C4.47419 17.6895 4.71123 17.6399 4.92164 17.5294L9.25523 15.2443L13.6015 17.5294C13.7875 17.6275 13.9912 17.6759 14.1935 17.6759C14.4625 17.6752 14.7246 17.5907 14.9433 17.4341C15.1354 17.2941 15.2845 17.1033 15.374 16.8831C15.4635 16.6629 15.4898 16.4221 15.45 16.1878L14.6212 11.349L18.14 7.91929C18.3103 7.7536 18.4307 7.54348 18.4876 7.31279C18.5445 7.0821 18.5356 6.84008 18.4619 6.61421ZM38.8308 6.61421C38.7571 6.38836 38.6217 6.18761 38.4399 6.03465C38.2582 5.88169 38.0372 5.78261 37.8021 5.74858L32.939 5.04194L30.766 0.651123C30.3357 -0.217041 28.9136 -0.217041 28.4834 0.651123L26.3103 5.04194L21.4587 5.74858C21.2238 5.78311 21.0031 5.88256 20.8216 6.03574C20.6401 6.18892 20.5049 6.38974 20.4314 6.61558C20.3579 6.84124 20.3491 7.08299 20.406 7.3134C20.4629 7.54381 20.5833 7.75364 20.7535 7.91909L24.2722 11.3488L23.4421 16.1876C23.4021 16.422 23.4283 16.6628 23.5178 16.883C23.6073 17.1032 23.7566 17.2941 23.9488 17.4339C24.1414 17.5731 24.3691 17.6558 24.6061 17.6726C24.8431 17.6895 25.0802 17.6399 25.2906 17.5294L29.6242 15.2443L33.9705 17.5294C34.1564 17.6275 34.3601 17.6759 34.5625 17.6759C34.8315 17.6752 35.0935 17.5907 35.3123 17.4341C35.5043 17.2941 35.6535 17.1033 35.743 16.8831C35.8325 16.6629 35.8588 16.4221 35.8189 16.1878L34.9902 11.349L38.5089 7.91929C38.6792 7.7536 38.7997 7.54348 38.8566 7.31279C38.9135 7.0821 38.9045 6.84008 38.8308 6.61421ZM59.1998 6.61421C59.1261 6.38836 58.9907 6.18761 58.8089 6.03465C58.6271 5.88169 58.4062 5.78261 58.1711 5.74858L53.308 5.04194L51.1349 0.651123C50.7047 -0.217041 49.2826 -0.217041 48.8523 0.651123L46.6793 5.04194L41.8277 5.74858C41.5927 5.78311 41.372 5.88256 41.1905 6.03574C41.009 6.18892 40.8739 6.38974 40.8003 6.61558C40.7268 6.84124 40.718 7.08299 40.7749 7.3134C40.8319 7.54381 40.9523 7.75364 41.1224 7.91909L44.6412 11.3488L43.8111 16.1876C43.7711 16.422 43.7974 16.6628 43.8869 16.8829C43.9764 17.1031 44.1256 17.294 44.3177 17.4339C44.5104 17.5731 44.738 17.6557 44.975 17.6726C45.2121 17.6895 45.4491 17.6399 45.6595 17.5294L49.9929 15.2443L54.3392 17.5294C54.5252 17.6275 54.7289 17.6759 54.9312 17.6759C55.2002 17.6752 55.4623 17.5907 55.681 17.4341C55.873 17.2941 56.0222 17.1033 56.1117 16.8831C56.2012 16.6629 56.2275 16.4221 56.1877 16.1878L55.3589 11.349L58.8777 7.91929C59.048 7.75363 59.1685 7.54353 59.2255 7.31283C59.2824 7.08214 59.2735 6.8401 59.1998 6.61421ZM79.5687 6.61421C79.495 6.38836 79.3596 6.18761 79.1778 6.03465C78.9961 5.88169 78.7751 5.78261 78.54 5.74858L73.6769 5.04194L71.5039 0.651123C71.0736 -0.217041 69.6515 -0.217041 69.2212 0.651123L67.0482 5.04194L62.1966 5.74858C61.9617 5.78311 61.741 5.88256 61.5595 6.03574C61.378 6.18892 61.2428 6.38974 61.1693 6.61558C61.0958 6.84124 61.087 7.08299 61.1439 7.3134C61.2008 7.54381 61.3212 7.75364 61.4914 7.91909L65.0101 11.3488L64.18 16.1876C64.1401 16.422 64.1664 16.6628 64.2559 16.8829C64.3454 17.1031 64.4946 17.294 64.6867 17.4339C64.8793 17.5731 65.107 17.6557 65.344 17.6726C65.581 17.6895 65.8181 17.6399 66.0285 17.5294L70.3619 15.2443L74.7082 17.5294C74.8941 17.6275 75.0978 17.6759 75.3001 17.6759C75.5691 17.6752 75.8312 17.5907 76.05 17.4341C76.242 17.2941 76.3912 17.1033 76.4807 16.8831C76.5702 16.6629 76.5965 16.4221 76.5566 16.1878L75.7279 11.349L79.2466 7.91929C79.417 7.75361 79.5374 7.5435 79.5943 7.31282C79.6513 7.08213 79.6424 6.8401 79.5687 6.61421ZM99.9377 6.61421C99.8638 6.38846 99.7283 6.18783 99.5466 6.03489C99.3648 5.88196 99.144 5.7828 98.9089 5.74858L94.0459 5.04194L91.8728 0.651123C91.4425 -0.217041 90.0205 -0.217041 89.5902 0.651123L87.4171 5.04194L82.5656 5.74858C82.3306 5.78311 82.1099 5.88256 81.9284 6.03574C81.7469 6.18892 81.6118 6.38974 81.5382 6.61558C81.4647 6.84124 81.4559 7.08299 81.5128 7.3134C81.5698 7.54381 81.6901 7.75364 81.8603 7.91909L85.3791 11.3488L84.549 16.1876C84.509 16.422 84.5353 16.6628 84.6248 16.8829C84.7143 17.1031 84.8635 17.294 85.0556 17.4339C85.273 17.5913 85.5345 17.6759 85.8029 17.6757C86.0104 17.6756 86.2147 17.6254 86.3986 17.5292L90.7322 15.2441L95.0796 17.5292C95.2896 17.6407 95.5267 17.6908 95.7639 17.6737C96.001 17.6566 96.2285 17.573 96.4203 17.4326C96.612 17.2926 96.7609 17.1019 96.8502 16.8819C96.9395 16.662 96.9657 16.4215 96.9257 16.1875L96.097 11.3486L99.6158 7.9189C99.7858 7.75311 99.9061 7.54306 99.963 7.3125C100.02 7.08193 100.011 6.84005 99.9377 6.61421Z"
              fill="#FFCF27"
            />
          </svg>
        </div>
      </div>

      <p className={Styles.Text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and.
      </p>
    </div>
  );
};

export default ReviewsCard;
