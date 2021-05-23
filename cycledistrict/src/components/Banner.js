import React, { Component } from 'react';

const textArray = ['dangerous', 'fast', 'free', 'trashy', 'CycleDistrict', 'CycleDistrict'];

class Banner extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let DynamicText = textArray[this.state.textIdx % textArray.length];

    return (
	<section id="banner" className="major">
		<div className="inner">

		    <header className="wrapperino">
	    		<h3>For fuck's sake</h3> <h1>Let's ride <span>{DynamicText}</span></h1>
		    </header>
			
		    <div className="content">
			<ul className="actions">
			    <li><a href="#one" className="button next scrolly">Get Ridin'</a></li>
			</ul>
		    </div>
		</div>
	</section>
    )
  }
}


/*
const Banner = (props) => (

	<section id="banner" className="major">
		<div className="inner">

		    <header className="wrapperino">
			<h1>Let's ride <spanx>for fuck's sake </spanx></h1>
			<h1>ride <span id="rotate">this</span>.</h1>
		    </header>
			
		    <div className="content">
			<ul className="actions">
			    <li><a href="#one" className="button next scrolly">Get Ridin'</a></li>
			</ul>
		    </div>
		</div>
	</section>
)

export default Banner
*/

export default Banner;
