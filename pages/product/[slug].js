import graphql from "../../lib/graphql";
import getAllProducts from "../../lib/graphql/queries/getAllProducts";
import GetProductBySlug from "../../lib/graphql/queries/getProductBySlug";

export async function getStaticProps() {
    const { products } = await graphql.request(GetProductBySlug,
        { slug: params.slug, });
return {
    props: {
    product: products[0],
    },
    };
}
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