import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const BurninVender = (props) => (
    <Layout>
        <Helmet>
            <title>BurninVender</title>
            <meta name="description" content="Riders Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>BurninVender</h1>
                        <h4>FOUNDER</h4>
                    </header>
                    <p>
                      <b>Name:</b> Devin Brunner<br/>
                      <b>Age:</b> ?<br/>
                      <b>Motorcycle:</b> Yamaha MT-10<br/>
                      <b>Driving since:</b> 2018<br/>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default BurninVender
