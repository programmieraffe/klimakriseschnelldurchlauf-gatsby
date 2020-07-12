import React from 'react';

import Layout from '../components/Layout';
import { graphql } from "gatsby"

import Header from '../components/Header';
import Footer from '../components/Footer';

import ScrollProgressRead from 'react-scroll-progress-read';

/* 2DO: add data to header
 <Header data={data} /> did not work */

const IndexPage = ({data}) => {
    return (
        <Layout>

        <div id="progressBarRead" style={{ margin: 0, padding: 0, position: "fixed", left: 0, top: 0, zIndex: 1000}}>
        <ScrollProgressRead

          height="10px"
          target="mainArticleContentForScrollProgress"
        />
        </div>

          <Header />

          <div id="main">



            <div className="box container" id="letsGo">
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

/* frontmatter {
  credits
}*/

export const pageQuery = graphql`
query IndexPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/index.md/"}) {
        id
        html
  }
}
`
