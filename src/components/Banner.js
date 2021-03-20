import React, { Component } from 'react';
import './Home.css';

const textArray = ['eat', 'sleep', 'drink', 'snore', 'foo', 'buzz', 'whatever'];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section>
        <h1>Hello, my name is Barry Allen</h1>
        <p>I like to <span>{textThatChanges}</span></p>
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
*/
export default Banner
