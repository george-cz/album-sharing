import type { GetStaticPropsContext, NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { readdirSync, readFileSync } from "fs";

const Home: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>
          {props.title} | {props.author}
        </title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerBg}></div>
          <img
            className={styles.albumart}
            src={props.albumart}
            alt={props.title}
          />
          <div className={styles.title}>{props.title}</div>
          <div className={styles.author}>{props.author}</div>
        </div>
        <div className={styles.gridwrapper}>
          {props.links.map((link: any) => (
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
      <p className={styles.footer}>
        <a href="mailto:jiri@vyhnalek.net">
          Made by jiri@vyhnalek.net<br></br>
          E-mail me!
        </a>
      </p>
    </>
  );
};
export async function getStaticPaths() {
  const datas = readdirSync(process.cwd() + "/data").map(
    (filename) => "/" + filename.split(".")[0]
  );
  return {
    paths: datas,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const content = readFileSync(
    process.cwd() + "/data/" + context.params?.album + ".json",
    "utf-8"
  );
  return {
    props: JSON.parse(content),
  };
}

export default Home;
