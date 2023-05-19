'use client'
import graphql from "../lib/graphql";
import getAllProducts from "../lib/graphql/queries/getAllProducts";
import { Grid } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
  };

export default function Home(props) {
  return (
   <Grid gridTemplateColumns='repeat(4, 1fr)' gap={5}>
      {props.products.map((product) => (
        <li key={product.id} {...product}>
          {product.name}
        </li>
      ))}
    </Grid>
  );
}
