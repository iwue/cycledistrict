import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'


const AzureOrange = (props) => (
    <Layout>
        <Helmet>
            <title>AzureOrange</title>
            <meta name="description" content="Riders Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>AzureOrange</h1>
                        <h4>FOUNDER</h4>
                    </header>
                    <p>
                      <b>Name:</b> Azure Orange<br/>
                      <b>Age:</b> 23<br/>
                      <b>Motorcycle:</b> 98s Yamaha YVS 650 a<br/>
                      <b>Driving since:</b> May 2018<br/>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default AzureOrange
