import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import data from "../data.json";

type HomeProps = typeof data;

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.headerBg + " bg-[url('" + props.bgOverlay + "')]"}
        ></div>
        <img
          className={styles.albumart}
          src={props.albumart}
          alt={props.title}
        />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.author}>{props.author}</div>
      </div>
      <div className={styles.gridwrapper}>
        {props.links.map((link) => (
          <a className={styles.card} href={link.link} key={link.link}>
            <img
              src={link.image}
              alt={link.name}
              className={styles.serviceImg}
            />
            <div className={styles.playbutton}>Play</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: data,
  };
}

export default Home;
