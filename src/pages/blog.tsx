import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog() {
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;

export default Blog;
