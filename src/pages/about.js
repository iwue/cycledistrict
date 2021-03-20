import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/azureorange_01.jpg'
import pic02 from '../assets/images/devinbrunner_01.jpg'
import pic03 from '../assets/images/raphaeltruniger_01.jpg'
import pic04 from '../assets/images/whatacruise_01.jpg'
import pic99 from '../assets/images/pic01.jpg'

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
                                <h3>Aaron Züger</h3>
                                <p>Dragstar Classic Rider</p>
                            </header>
                            <Link to="/azureorange" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Devin Brunner</h3>
                                <p>MT-10 Rider</p>
                            </header>
                            <Link to="/burninvender" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Raphael Truniger</h3>
                                <p>MT-07 Rider</p>
                            </header>
                            <Link to="/earthlinguprear" className="link primary"></Link>
                        </article>
                    
                    </section>
                    <section id="four" className="Titless">
                    <div className="inner">
                        <h2>MEMBERS</h2>
                    </div>
                    </section>
                     <section id="five" className="tiles">

                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Isaac Würth</h3>
                                <p>CBR 600 Rider</p>
                            </header>
                            <Link to="/whatacruise" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic99})`}}>
                            <header className="major">
                                <h3>Member</h3>
                                <p>Mt-07 Rider</p>
                            </header>
                            <Link to="/generic" className="link primary"></Link>
                        </article>

                    </section>
                </div>

            </Layout>
        )
    }
}

export default About
