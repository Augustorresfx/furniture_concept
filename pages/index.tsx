import {GetStaticProps} from "next";
import Categorias from '../components/categorias'
import Footer from '../components/footer'
import Hero from '../components/hero'
import StoreScreen from '../product/screens/Store'
import api from "../product/api";
import {Product} from "../product/types";

interface Props {
  products: Product[];
}

const Home: React.FC<Props> = ({products}) => {
  return (
<>
<header>
      <Hero/>
      </header>
      <section id="categorias">
        <Categorias/>
      </section>
      <section id="productos">
        <StoreScreen products={products} />
      </section>
      <footer>
      <Footer/>
      </footer>
      </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default Home
