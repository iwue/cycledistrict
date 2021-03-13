import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import pic11 from '../assets/images/pic11.jpg'

const Blog = (props) => (
    <Layout>
        <Helmet>
            <title>Blog</title>
            <meta name="description" content="Blog Main Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Blog</h1>
                    </header>
                    //<span className="image main"><img src={pic11} alt="" /></span>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Blog
