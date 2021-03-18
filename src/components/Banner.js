import React from 'react'

const Banner = (props) => (
    <head>
	<meta charset="utf-8">
	<title>Changing Word Slider</title>

	<style>
	 .wordchanger:before{
	  content: 'content.';
	  animation-name: mywordchange;
	  animation-duration: 10s;
	  animation-iteration-count: infinite;
	  animation-timing-function: ease;
	 }

	 @keyframes mywordchange{
	  0%{content: 'CycleDistrict.';}
	  10%{content: 'fast.';}
	  20%{content: 'free.';}
	  30%{content: 'trashy.';}
	  40%{content: 'CycleDistrict.';}
	  100%{content: 'CycleDistrict.';}
	 }
	</style>
    </head>
    <body>
    <section id="banner" className="major">
        <div className="inner">
	    
            <header className="wrapperino">
                <h1>Let's ride <spanx>for fuck's sake </spanx></h1><h1 class="wordchanger"></h1>
            </header>
	
            <div className="content">
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Ridin'</a></li>
                </ul>
            </div>
        </div>
    </section>
    </body>
)

export default Banner
