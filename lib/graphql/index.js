import { GraphQLClient } from "graphql-request";

const GRAPHCMS_ENDPOINT = process.env.GRAPHCMS_ENDPOINT;
const GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;

const autorization = `Bearer ${GRAPHCMS_API_KEY}`;

export default new GraphQLClient(GRAPHCMS_ENDPOINT, {
    headers: {
        ...(GRAPHCMS_API_KEY && {autorization}),
    },
});