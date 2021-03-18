import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import pic01 from '../assets/images/pic01.jpg'
class About extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <FormattedMessage id="about">{txt => <title>{txt}</title>}</FormattedMessage> 
                    <FormattedMessage id="about">{txt => <meta name="description" content={txt} />}</FormattedMessage> 
                </Helmet>

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h1><FormattedMessage id="about" /></h1>
                            </header>
                            <p>We are just a bunch of young Swiss motorcylists.</p>
                            <p> </p>
                            <p> </p>
                        </div>
                    </section>
                    <section id="two" className="Titless">
                    <div className="inner">
                            <header className="major">
                                <h1><FormattedMessage id="about" /></h1>
                            </header>
                        <h2><FormattedMessage id="founders"/></h2>
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
                        <h2><FormattedMessage id="Members" /></h2>
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
