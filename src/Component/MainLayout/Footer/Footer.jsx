import styles from "./Footer.module.css";

import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer_section">
      <div className={styles.footer_container}>
        <div className={styles.footer_inner_content}>
          <div className={styles.logo_socialIcons_column_1}>
            <h2>CSS-1</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quis corporis soluta a facilis harum?</p>
            <div>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><FaSquareInstagram /></a>
            <a href="#"><FaSquareTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaSquareGithub /></a>
            </div>
           
          </div>
          <div className={styles.column_2}>
            <a href="#">Support</a>
            <a href="#">Priceing</a>
            <a href="#">Documentation</a>
            <a href="#">Guides</a>
            <a href="#">API Status</a>
          <a href="#">Datas</a>
          <a href="#">Datas</a>

          </div>
          <div className={styles.column_3}>
            <a href="#">Solutions</a>
            <a href="#">Analytics</a>
            <a href="#">Marketing</a>
            <a href="#">Commerce</a>
            <a href="#">Insight</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Team Members</a>
          </div>
          <div className={styles.column_4}>
            <a href="#">Company</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Legal</a>
            <a href="#">Claim</a>
          </div>

        </div>

      <div className={styles.copy_write}>
        <p>&copy; All Rights Reserved by <span>Rashidul Islam Rashed</span>
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
