import styles from "./ManageData.module.css";
import DataAnalyticsImg from "..//..//assets/IMG/Data_Analytics.png";

const ManageData = () => {
  return (
    <section id="manageDataAnalytics">
      <div className={styles.manage_data_analytiecs_container}>
        <div className={styles.data_analytiecs_img}>
          <img src={DataAnalyticsImg} alt="" />
        </div>
        <div className={styles.data_analytiecs_text}>
          <b>DATA ANALYTICS DESHBOARD</b>
          <h1>Manage Data Analytics Centrally.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            magnam qui debitis quibusdam? Distinctio, doloribus possimus cum
            laborum at asperiores.
          </p>

          <a href="#">
            {" "}
            <button className={styles.get_started_btn}>Get Started</button>
          </a>
        </div>
      </div>

      <div className={styles.subscribe_container}>
        <div className={styles.subscribe_inner_content}>
          <div className={styles.subscribe_text}>
            <h2>Want tips & tricks to optimize your flow?</h2>
            <small>Sing up to new'slettter and stay up to date.</small>
          </div>
          <div className={styles.subscribe_email_input}>
            <form>
                <input type="email" placeholder="Enter your email" required />
                <button>Notify me</button>
            </form>

            <small>We care bout the protection of you data. Read our <br /><a href="#"> Privacy Policy</a></small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageData;
