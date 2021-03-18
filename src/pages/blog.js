import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic01 from '../assets/images/musterblogeintrag.jpg'

class Blog extends React.Component {
    render() {

        return (

        /* const About = (props) => ( */
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
                            <p> </p>
                            <p> </p>
                            <p> </p>
                        </div>
                    </section>
                    
                    </section>
                    <section id="Article" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Bikergruß</h3>
                                <p>Wie er entstand und wie er angewendet wird.</p>
                            </header>
                            <Link to="/musterblogeintrag" className="link primary"></Link>
                        </article>
                </div>
            </Layout>
        )
    }
}

const Blog = (props) => (
    <Layout>
        

    </Layout>
)

export default Blog
