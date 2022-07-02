import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Categorias from '../components/categorias'
import Footer from '../components/footer'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
<>
<header>
      <Hero/>
      </header>
      <section id="categorias">
        <Categorias/>
      </section>
      <section id="productos">
        
      </section>
      <footer>
      <Footer/>
      </footer>
      </>
  )
}

export default Home
