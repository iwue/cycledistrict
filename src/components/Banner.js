import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
	    <head>
		<link rel="stylesheet" href="dynamictitle.css"></link>
	    </head>
            <header class="wrapperino">
                <h1x>ride <spanx></spanx></h1x>
            </header>
		<div class="wrapperino">
			<h1x>ride <spanx></spanx></h1x>
			<p>A group of young and motivated <b>Motorcyclists</b> 
			(EN: <sub>NOUN SINGULAR</sub> Motorcyclist, <sub>IPA</sub>: [ˈmoʊtɚˌsaɪ.klɪst]:
			A person willing to take a container of flammable liquid,
			place it on top of a hot moving engine
			and then put the whole lot between their legs.)
			</p>
		</div>
            <div className="content">
                <p>
                A group of young and motivated <b>Motorcyclists</b> 
		        (EN: <sub>NOUN SINGULAR</sub> Motorcyclist, <sub>IPA</sub>: [ˈmoʊtɚˌsaɪ.klɪst]: 
                A person willing to take a container of flammable liquid, place it on top of a hot moving engine and the put the whole lot between their legs.).
                </p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
