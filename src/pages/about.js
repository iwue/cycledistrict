import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'

class About extends React.Component {
    render() {

        return (

        /* const About = (props) => ( */
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
                        </div>
                    </section>
                    <section id="two" className="Titless">
                    <div className="inner">
                            <header className="major">
                                <h1>Our Riders</h1>
                            </header>
                        <h2>FOUNDERS</h2>
                    </div>
                    </section>
                    <section id="three" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>AzureOrange</h3>
                                <p>Dragstar Rider</p>
                            </header>
                            <Link to="/ridersazureorange" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="four" className="Titless">
                    <div className="inner">
                        <h2>MEMBERS</h2>
                    </div>
                    </section>
                     <section id="five" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Member</h3>
                                <p>Mt-07 Rider</p>
                            </header>
                            <Link to="/ridersazureorange" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default About
