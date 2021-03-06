import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js';

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arthurs Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Arthurs Photos
        </h1>

        <p className={styles.description}>
          Buy my photos please
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, price, description, image } = product;
            return(
              <li key={id} className={styles.card} >
                <a href="#">
                <Image width='300' height='200' src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{price}</p>
                  <p>{description}</p>
                </a>
                <p>
                  <button className={styles.button} onClick={() =>{
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1
                        }
                      ]
                    })
                  }}>Buy Now</button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
