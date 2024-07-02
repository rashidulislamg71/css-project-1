
import ManageData from "../../Component/ManageData/ManageData";
import PurchaseMembership from "../../Component/PurchaseMembership/PurchaseMembership";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <section id="home_section">
            <div className={styles.hero_container}>
                <div className={styles.hero_inner_content}>
                    <b>GROWING WITH DATA ANALYTICS</b>
                    <h1>Grow with dat.</h1>
                    <h3>Fast, flexible financing for B2B and D2C.</h3>
                    <p>Monitor your data analytics to increase revenue for BTB, BTC, & SASS <br />Platform.</p>
                    <a href="#"><button className={styles.get_started_btn}>
                        Get Started
                    </button></a>
                </div>
            </div>

            <ManageData />
            <PurchaseMembership />
            
        </section>
    );
};

export default Home;