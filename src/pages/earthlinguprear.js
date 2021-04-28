import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const EarthlingUpRear = (props) => (
    <Layout>
        <Helmet>
            <title>EarthlingUpRear</title>
            <meta name="description" content="Riders Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>EarthlingUpRear</h1>
                        <h4>FOUNDER</h4>
                    </header>
                    <p>
                      <b>Name:</b> Raphael Truniger<br/>
                      <b>Age:</b> ?<br/>
                      <b>Motorcycle:</b> MT-07<br/>
                      <b>Driving since:</b> 2020<br/>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default EarthlingUpRear
