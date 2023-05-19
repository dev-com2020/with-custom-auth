import graphql from "../../lib/graphql";
import getAllProducts from "../../lib/graphql/queries/getAllProducts";

export async function getStaticProps() {}
export async function getStaticPaths() {
    const { products } = await graphql.request(getAllProducts);
    return {
        paths: products.map((product) => ({
        params: {
            slug: product.slug,
        },
        })),
        fallback: false,
    };
}
export default function ProductPage(props) {}