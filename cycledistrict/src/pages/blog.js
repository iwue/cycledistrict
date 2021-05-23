import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

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
            
                <BannerBlog />

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                        </div>
                    </section>
                    
                    <section id="Article" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Der Bikergruß</h3>
                                <p>Wie er entstand und wie er angewendet wird.</p>
                            </header>
                            <Link to="/musterblogeintrag" className="link primary"></Link>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Blog
