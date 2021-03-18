import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Homepage"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>What is going on in CycleDistrict East?</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Newest Blogpost</h3>
                                <p>[Sneak Peak]</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>About Us</h3>
                                <p>What is CycleDistrict East?</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Riders</h3>
                                <p>Who is CycleDistrict East?</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Placeholder</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Rideouts</h3>
                                <p>When will we be seen?</p>
                            </header>
                            <Link to="/rideouts" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>CycleDistrict East</h2>
                            </header>
                            <p>A group of young and motivated <b>Motorcyclists</b><br/>
		            (EN: [NOUN] [SINGULAR] Motorcyclist, IPA: [ˈmoʊtɚˌsaɪ.klɪst]: /* ˈmoʊtɚˌsaɪ.klɪst -- moh-ter-sahy-klist */
                            A person willing to take a container of flammable liquid, place it on top of a hot moving engine and then put the whole lot between their legs.).</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button next">Get Ridin'</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
