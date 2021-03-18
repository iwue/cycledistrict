import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <meta charset="utf-8">
    
                <style>
                    .dyntext:before{
                        content: 'content.';
                        animation-name: mydyntext;
                        animation-duration: 10s;
                        animation-iteration-count: infinite;
                        animation-timing-function: ease;
                    }

                    @keyframes mydyntext{
                        0%{content: 'CycleDistrict.';}
                        10%{content: 'fast.';}
                        20%{content: 'free.';}
                        30%{content: 'trashy.';}
                        40%{content: 'CycleDistrict.';}
                        100%{content: 'CycleDistrict.';}
                    }
                </style>
                <h1>ride </h1>
                <h1 class="dyntext"></h1>
            </header>
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
