// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Head>
        <title>Brennen Adams Photography</title>
        <meta name="description" content="Photography portfolio and booking site by Brennen Adams" />
      </Head>

      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Brennen Adams Photography
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
        ???
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/galleries">
          <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            View Portfolio
          </button>
        </Link>
        <Link href="/book">
          <button style={{ padding: '0.8rem 1.5rem', backgroundColor: 'transparent', border: '1px solid #fff', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}>
            Book a Session
          </button>
        </Link>
      </div>

      <Image
        src="/hero.jpg"
        alt="Hero photo"
        width={800}
        height={500}
        style={{ borderRadius: '12px' }}
        priority
      />
    </div>
  )
}
