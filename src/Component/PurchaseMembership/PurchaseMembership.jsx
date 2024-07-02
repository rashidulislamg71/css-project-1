import styles from "./PurchaseMembership.module.css";
import singleUserImg from "..//..//assets/IMG/single_user.png";
import partnershipImg from "..//..//assets/IMG/partnership_user.png";
import groupImg from "..//..//assets/IMG/group_account.png";

const PurchaseMembership = () => {
  return (
    <section id="PurchaseMembership">
      <div className={styles.PurchaseMembership_container}>
        <div className={styles.PurchaseMembership_inner_content}>
          <div className={styles.single_user_content}>
            <img src={singleUserImg} alt="SingleUser" />
            <h4>Single User</h4>
            <h3>$149</h3>
            <small>500 GB Storage</small>
            <small>1 User Allowed</small>
            <small>Send Up To 2 GB</small>

            <a href="#">
              <button>Start Trial</button>
            </a>
          </div>
          <div className={styles.partnership_user_content}>
            <img src={partnershipImg} alt="SingleUser" />
            <h4>Partnership</h4>
            <h3>$199</h3>
            <small>1TB Storage</small>
            <small>3 Users Allowed</small>
            <small>Send Up To 10 GB</small>

            <a href="#">
              <button>Start Trial</button>
            </a>
          </div>
          <div className={styles.group_user_content}>
            <img src={groupImg} alt="SingleUser" />
            <h4>Group Account</h4>
            <h3>$299</h3>
            <small>5 TB Storage</small>
            <small>10 User Allowed</small>
            <small>Send Up To 20 GB</small>

            <a href="#">
              <button>Start Trial</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseMembership;
