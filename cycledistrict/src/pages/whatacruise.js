import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const WhatACruise = (props) => (
    <Layout>
        <Helmet>
            <title>WhatACruise</title>
            <meta name="description" content="Riders Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>WhatACruise</h1>
                        <h4>DEVELOPER</h4>
                    </header>
                    <p>
                      <b>Name:</b> Isaac Würth<br/>
                      <b>Age:</b> 23 <br/>
                      <b>Motorcycle:</b> Honda CBR 600<br/>
                      <b>Driving since:</b> ?<br/>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default WhatACruise
