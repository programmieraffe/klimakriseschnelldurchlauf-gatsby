import React from 'react';

import Layout from '../components/Layout';
import { graphql } from "gatsby"
import Header from '../components/Header';
import Footer from '../components/Footer';


const IndexPage = ({data}) => {
    return (
        <Layout>
          <Header />

          <div id="main">
            <header className="major container medium">
              {data.markdownRemark.frontmatter.title}
            </header>
            <div className="box container">
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            </div>
          </div>
          <Footer />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/index.md/"}) {
        id
        frontmatter {
        title
        }
        html
  }
}
`

