import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/motorcycle_01.jpg'
import pic02 from '../assets/images/motorcycle_02.jpg'
import pic03 from '../assets/images/motorcycle_03.jpg'
import pic04 from '../assets/images/motorcycle_04.jpg'
import pic05 from '../assets/images/motorcycle_06.jpg'
import pic06 from '../assets/images/motorcycle_05.jpg'

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
                                <p>Der Bikergruß - by AzureOrange</p>
                            </header>
                            <Link to="/musterblogeintrag" className="link primary"></Link>
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
                            <Link to="/about/#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Rideouts</h3>
                                <p>When will we be seen?</p>
                            </header>
                            <Link to="/rideouts" className="link primary"></Link>
                        </article>
			<article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Placeholder</h3>
                                <p>wie bringis ane dass de wegaht und de rideouts di ganz breiti inimmt??</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>CycleDistrict East</h2>
                            </header>
                            <p>A group of young and motivated <b>Motorcyclists</b><br/>
		            (EN: [NOUN] [SINGULAR] Motorcyclist, IPA: [ˈmoʊtɚˌsaɪ.klɪst]:
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
