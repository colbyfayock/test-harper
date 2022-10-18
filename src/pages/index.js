import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '../styles/Home.module.scss';

export default function Dashboard({ products }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Space Jelly Store</title>
        <meta name="description" content="Apparel that's out of this world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="sr-only">Space Jelly Store</h1>

      <Section>
        <Container className={styles.actionsContainer}>
          <Button>Add Product</Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>Products</h2>

          <ul className={styles.products}>
            {products.map(product => {
              return (
                <li key={product.id}>
                  <a href={product.url} rel="noopener noreferrer">
                    <Image width="600" height="600" src={product.image} alt="" />
                  </a>
                  <h3 className={styles.productsTitle}>
                    { product.title }
                  </h3>
                  <p>
                    ${ product.price }
                  </p>
                  <p className={styles.productActions}>
                    <Button href={`/product/update?${Object.keys(product).map(key => `${key}=${product[key]}`).join('&')}`}>Update Product</Button>
                    <Button color="red" href={`/product/delete?id=${product.id}&title=${product.title}`}>Delete Product</Button>
                  </p>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      products: [
        {
          id: '1',
          title: 'Cosmo Hat',
          image: '/images/cosmo-hat.jpg',
          price: '5.00'
        },
        {
          id: '2',
          title: 'Cosmo Hat',
          image: '/images/cosmo-hat.jpg',
          price: '5.00'
        },
        {
          id: '3',
          title: 'Cosmo Hat',
          image: '/images/cosmo-hat.jpg',
          price: '5.00'
        },
        {
          id: '4',
          title: 'Cosmo Hat',
          image: '/images/cosmo-hat.jpg',
          price: '5.00'
        },
    ]
    }
  }
}