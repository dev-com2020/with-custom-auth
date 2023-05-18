import graphql from "../lib/graphql";
import getAllProducts from "../lib/graphql/queries/getAllProducts";

export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};

export default function Home() {
  return (
   <Grid gridTemplateColumns='repeat(4, 1fr)' gap={5}>
      {props.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
}
