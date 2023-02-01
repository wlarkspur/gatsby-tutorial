import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
