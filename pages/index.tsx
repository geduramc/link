import Head from 'next/head'
import { ReactElement, useState, useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home (): ReactElement {
  const input = useRef<any>()
  const [shortURL, setShortURL] = useState('')

  const handleSubmit = (e: any): any => {
    e.preventDefault()
    const url: string = (input.current !== undefined) ? input.current.value : null

    if (url.length <= 0) return console.error('Error or missing url')

    fetch('/api/shortUrl', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ url })
    }).then(async res => await res.json()).then(data => {
      console.log(data)
      setShortURL(data.shortUrl)
    }).catch(err => {
      console.error(err)
    })
  }

  return (
    <>
      <Head>
        <title>geduramc - url shortener</title>
        <meta name='description' content='Url shortener by geduramc' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <form className={styles.card} onSubmit={handleSubmit}>
          <input ref={input} type='text' name='' id='' className={styles.input} placeholder='URL' />
          <button className={styles.button}>Shorten</button>
        </form>
        <span className={styles.input}>{shortURL}</span>
      </main>
    </>
  )
}
