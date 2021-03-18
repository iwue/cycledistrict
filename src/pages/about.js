import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>
                    <p>We are ...</p>
                    <p> </p>
                    <p> </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default About
