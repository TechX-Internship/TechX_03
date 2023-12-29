import React from "react";
import Styles from "../styles/BlogCard.module.css";

const BlogUpdateBy = () => {
  return (
    <div className="d-flex justify-between py-2">
      <div className="d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_53_593)">
            <path
              d="M5.10019 0.507812C4.52636 0.507812 4.07675 0.84207 4.07675 1.26879V2.10566H2.20124C1.87208 2.10605 1.55651 2.23698 1.32376 2.46973C1.09101 2.70249 0.960089 3.01806 0.959717 3.34723V18.2518C0.960244 18.5808 1.09125 18.8961 1.324 19.1287C1.55675 19.3612 1.87223 19.4919 2.20124 19.4922H17.8001C18.1289 19.4918 18.4442 19.361 18.6768 19.1285C18.9093 18.8959 19.0401 18.5806 19.0405 18.2518V3.34723C19.0403 3.01821 18.9095 2.70272 18.677 2.46996C18.4445 2.2372 18.1291 2.10619 17.8001 2.10566H15.9234V1.26879C15.9234 0.84207 15.4742 0.507812 14.9011 0.507812C14.3272 0.507812 13.8776 0.84207 13.8776 1.26879V2.10566H11.0235V1.26879C11.0235 0.84207 10.574 0.507812 10.0001 0.507812C9.42624 0.507812 8.97667 0.84207 8.97667 1.26879V2.10566H6.12354V1.26879C6.12358 0.84207 5.67405 0.507812 5.10019 0.507812ZM4.70175 1.27344C4.72065 1.2325 4.86429 1.13281 5.10019 1.13281C5.33608 1.13281 5.47968 1.2325 5.49862 1.27344V2.10566H4.70175V1.27344ZM1.58456 6.01172H18.4155V15.3105H16.086C16.0032 15.3105 15.9237 15.3435 15.8651 15.4021C15.8065 15.4607 15.7735 15.5402 15.7735 15.623V17.9526H2.20124C2.03775 17.9524 1.88102 17.8874 1.76543 17.7718C1.64984 17.6562 1.58485 17.4994 1.58472 17.3359L1.58456 6.01172ZM17.9734 15.9355L16.3985 17.5106V15.9355L17.9734 15.9355ZM17.8001 18.8672H2.20124C2.06862 18.8671 1.93955 18.8243 1.83314 18.7452C1.72673 18.666 1.64862 18.5547 1.61038 18.4277C1.79171 18.5263 1.99486 18.5778 2.20124 18.5775H16.086C16.1689 18.5775 16.2484 18.5446 16.3071 18.486L18.4156 16.3774V18.2518C18.4154 18.4149 18.3505 18.5714 18.2351 18.6868C18.1197 18.8021 17.9633 18.867 17.8001 18.8672ZM14.5027 1.27344C14.5213 1.23262 14.6648 1.13301 14.9011 1.13301C15.1368 1.13301 15.28 1.23262 15.2984 1.2734V2.10566H14.5027L14.5027 1.27344ZM9.60167 1.27344C9.62062 1.23254 9.76421 1.13281 10.0001 1.13281C10.236 1.13281 10.3796 1.2325 10.3985 1.27344V2.10566H9.60167V1.27344ZM10.0001 4.05508C10.083 4.05508 10.1625 4.02215 10.2211 3.96355C10.2797 3.90494 10.3126 3.82546 10.3126 3.74258C10.3126 3.6597 10.2797 3.58021 10.2211 3.52161C10.1625 3.463 10.083 3.43008 10.0001 3.43008C9.76511 3.43008 9.6212 3.33023 9.60167 3.28906V2.73066H13.8777V3.29406C13.8777 3.72078 14.3272 4.05504 14.9011 4.05504C14.984 4.05504 15.0635 4.02211 15.1221 3.96351C15.1807 3.9049 15.2136 3.82542 15.2136 3.74254C15.2136 3.65966 15.1807 3.58017 15.1221 3.52157C15.0635 3.46296 14.984 3.43004 14.9011 3.43004C14.6656 3.43004 14.5219 3.33027 14.5027 3.28922V2.73062H17.8001C17.9634 2.73096 18.1199 2.79606 18.2353 2.91165C18.3507 3.02723 18.4155 3.18387 18.4155 3.34719V5.38672H1.58472V3.34723C1.58488 3.18376 1.64989 3.02704 1.76547 2.91145C1.88106 2.79586 2.03778 2.73084 2.20124 2.73066H4.07683V3.29406C4.07683 3.72078 4.52636 4.05504 5.10026 4.05504C5.18314 4.05504 5.26263 4.02211 5.32123 3.96351C5.37984 3.9049 5.41276 3.82542 5.41276 3.74254C5.41276 3.65966 5.37984 3.58017 5.32123 3.52157C5.26263 3.46296 5.18314 3.43004 5.10026 3.43004C4.86526 3.43004 4.72136 3.3302 4.70183 3.28902V2.73066H8.97667V3.29406C8.97667 3.72078 9.42624 4.05508 10.0001 4.05508ZM7.39901 9.72895H8.98913C9.07201 9.72895 9.1515 9.69602 9.2101 9.63742C9.26871 9.57881 9.30163 9.49933 9.30163 9.41645V8.01348C9.30163 7.9306 9.26871 7.85111 9.2101 7.79251C9.1515 7.7339 9.07201 7.70098 8.98913 7.70098H7.39901C7.31613 7.70098 7.23665 7.7339 7.17804 7.79251C7.11944 7.85111 7.08651 7.9306 7.08651 8.01348V9.41645C7.08651 9.49933 7.11944 9.57881 7.17804 9.63742C7.23665 9.69602 7.31613 9.72895 7.39901 9.72895ZM7.71151 8.32598H8.67663V9.10395H7.71151V8.32598ZM11.0111 9.72895H12.6012C12.684 9.72895 12.7635 9.69602 12.8221 9.63742C12.8807 9.57881 12.9137 9.49933 12.9137 9.41645V8.01348C12.9137 7.9306 12.8807 7.85111 12.8221 7.79251C12.7635 7.7339 12.684 7.70098 12.6012 7.70098H11.0111C10.9282 7.70098 10.8487 7.7339 10.7901 7.79251C10.7315 7.85111 10.6986 7.9306 10.6986 8.01348V9.41645C10.6986 9.49933 10.7315 9.57881 10.7901 9.63742C10.8487 9.69602 10.9282 9.72895 11.0111 9.72895ZM11.3236 8.32598H12.2887V9.10395H11.3236V8.32598ZM3.78694 13.1616H5.37812C5.461 13.1616 5.54048 13.1287 5.59909 13.0701C5.65769 13.0115 5.69062 12.932 5.69062 12.8491V11.4473C5.69062 11.3644 5.65769 11.2849 5.59909 11.2263C5.54048 11.1677 5.461 11.1348 5.37812 11.1348H3.78694C3.70406 11.1348 3.62458 11.1677 3.56597 11.2263C3.50737 11.2849 3.47444 11.3644 3.47444 11.4473V12.8491C3.47444 12.932 3.50737 13.0115 3.56597 13.0701C3.62458 13.1287 3.70406 13.1616 3.78694 13.1616ZM4.09944 11.7598H5.06562V12.5366H4.09944V11.7598ZM7.39901 13.1616H8.98913C9.07201 13.1616 9.1515 13.1287 9.2101 13.0701C9.26871 13.0115 9.30163 12.932 9.30163 12.8491V11.4473C9.30163 11.3644 9.26871 11.2849 9.2101 11.2263C9.1515 11.1677 9.07201 11.1348 8.98913 11.1348H7.39901C7.31613 11.1348 7.23665 11.1677 7.17804 11.2263C7.11944 11.2849 7.08651 11.3644 7.08651 11.4473V12.8491C7.08651 12.932 7.11944 13.0115 7.17804 13.0701C7.23665 13.1287 7.31613 13.1616 7.39901 13.1616ZM7.71151 11.7598H8.67663V12.5366H7.71151V11.7598ZM11.0111 13.1616H12.6012C12.684 13.1616 12.7635 13.1287 12.8221 13.0701C12.8807 13.0115 12.9137 12.932 12.9137 12.8491V11.4473C12.9137 11.3644 12.8807 11.2849 12.8221 11.2263C12.7635 11.1677 12.684 11.1348 12.6012 11.1348H11.0111C10.9282 11.1348 10.8487 11.1677 10.7901 11.2263C10.7315 11.2849 10.6986 11.3644 10.6986 11.4473V12.8491C10.6986 12.932 10.7315 13.0115 10.7901 13.0701C10.8487 13.1287 10.9282 13.1616 11.0111 13.1616ZM11.3236 11.7598H12.2887V12.5366H11.3236V11.7598ZM3.78694 16.5943H5.37812C5.461 16.5943 5.54048 16.5614 5.59909 16.5028C5.65769 16.4442 5.69062 16.3647 5.69062 16.2818V14.88C5.69062 14.7971 5.65769 14.7176 5.59909 14.659C5.54048 14.6004 5.461 14.5675 5.37812 14.5675H3.78694C3.70406 14.5675 3.62458 14.6004 3.56597 14.659C3.50737 14.7176 3.47444 14.7971 3.47444 14.88V16.2818C3.47444 16.3647 3.50737 16.4442 3.56597 16.5028C3.62458 16.5614 3.70406 16.5943 3.78694 16.5943ZM4.09944 15.1925H5.06562V15.9693H4.09944V15.1925ZM7.39901 16.5943H8.98913C9.07201 16.5943 9.1515 16.5614 9.2101 16.5028C9.26871 16.4442 9.30163 16.3647 9.30163 16.2818V14.88C9.30163 14.7971 9.26871 14.7176 9.2101 14.659C9.1515 14.6004 9.07201 14.5675 8.98913 14.5675H7.39901C7.31613 14.5675 7.23665 14.6004 7.17804 14.659C7.11944 14.7176 7.08651 14.7971 7.08651 14.88V16.2818C7.08651 16.3647 7.11944 16.4442 7.17804 16.5028C7.23665 16.5614 7.31613 16.5943 7.39901 16.5943ZM7.71151 15.1925H8.67663V15.9693H7.71151V15.1925ZM3.78694 9.72895H5.37812C5.461 9.72895 5.54048 9.69602 5.59909 9.63742C5.65769 9.57881 5.69062 9.49933 5.69062 9.41645V8.01348C5.69062 7.9306 5.65769 7.85111 5.59909 7.79251C5.54048 7.7339 5.461 7.70098 5.37812 7.70098H3.78694C3.70406 7.70098 3.62458 7.7339 3.56597 7.79251C3.50737 7.85111 3.47444 7.9306 3.47444 8.01348V9.41645C3.47444 9.49933 3.50737 9.57881 3.56597 9.63742C3.62458 9.69602 3.70406 9.72895 3.78694 9.72895ZM4.09944 8.32598H5.06562V9.10395H4.09944V8.32598ZM16.2133 11.1348H14.6232C14.5403 11.1348 14.4608 11.1677 14.4022 11.2263C14.3436 11.2849 14.3107 11.3644 14.3107 11.4473V12.8491C14.3107 12.932 14.3436 13.0115 14.4022 13.0701C14.4608 13.1287 14.5403 13.1616 14.6232 13.1616H16.2133C16.2962 13.1616 16.3756 13.1287 16.4342 13.0701C16.4928 13.0115 16.5258 12.932 16.5258 12.8491V11.4473C16.5258 11.3644 16.4928 11.2849 16.4342 11.2263C16.3756 11.1677 16.2962 11.1348 16.2133 11.1348ZM15.9008 12.5366H14.9357V11.7598H15.9008V12.5366ZM11.0111 16.5943H12.6012C12.684 16.5943 12.7635 16.5614 12.8221 16.5028C12.8807 16.4442 12.9137 16.3647 12.9137 16.2818V14.88C12.9137 14.7971 12.8807 14.7176 12.8221 14.659C12.7635 14.6004 12.684 14.5675 12.6012 14.5675H11.0111C10.9282 14.5675 10.8487 14.6004 10.7901 14.659C10.7315 14.7176 10.6986 14.7971 10.6986 14.88V16.2818C10.6986 16.3647 10.7315 16.4442 10.7901 16.5028C10.8487 16.5614 10.9282 16.5943 11.0111 16.5943ZM11.3236 15.1925H12.2887V15.9693H11.3236V15.1925ZM14.3587 8.91176C14.3294 8.88289 14.306 8.84851 14.29 8.81059C14.274 8.77267 14.2656 8.73195 14.2653 8.69078C14.2651 8.64961 14.273 8.6088 14.2886 8.57069C14.3042 8.53258 14.3271 8.49793 14.3561 8.46871C14.3851 8.4395 14.4196 8.41631 14.4576 8.40048C14.4956 8.38464 14.5364 8.37647 14.5776 8.37643C14.6187 8.3764 14.6595 8.38449 14.6975 8.40026C14.7356 8.41603 14.7701 8.43916 14.7992 8.46832L15.2013 8.86766L16.0191 7.90129C16.0726 7.83802 16.1491 7.79861 16.2317 7.79173C16.3143 7.78485 16.3963 7.81107 16.4595 7.86461C16.5228 7.91815 16.5622 7.99463 16.5691 8.07723C16.576 8.15982 16.5497 8.24177 16.4962 8.30504L15.4598 9.52973C15.4319 9.56268 15.3975 9.58951 15.3587 9.6085C15.3199 9.62749 15.2776 9.63824 15.2345 9.64008C15.23 9.64008 15.2255 9.64035 15.221 9.64035C15.1385 9.64036 15.0593 9.60772 15.0008 9.54957L14.3587 8.91176Z"
              fill="#1C396A"
            />
          </g>
          <defs>
            <clipPath id="clip0_53_593">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="px-3">Jun 03,2023</span>
      </div>

      <div className="">
        <span className={Styles.ByAdmin}>Upload By :</span>
        <span> Admin</span>
      </div>
    </div>
  );
};

export default BlogUpdateBy;
