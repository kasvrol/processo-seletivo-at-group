import Head from "next/head";
import Cards from "../components/cards";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Processo Seletivo</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/cube.png" />
            </Head>
            <Header />
            <main className={styles.main}>
                <Cards />
            </main>
        </>
    );
}
