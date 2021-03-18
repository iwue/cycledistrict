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
                    <p>We are just a bunch of young Swiss motorcylists.</p>
                    <p> </p>
                    <p> </p>
                    <h2>FOUNDERS</h2>
                    <h3>Azure Orange</h3>
                </div>
            </section>
        </div>

    </Layout>
)

export default About
