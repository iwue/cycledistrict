import React from 'react'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

var terms = ["term 1", "term 2", "term 3"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2000).fadeOut(200, rotateTerm);
}
$(rotateTerm);

const Banner = (props) => (

	<section id="banner" className="major">
		<div className="inner">

		    <header className="wrapperino">
			/* <h1>Let's ride <spanx>for fuck's sake </spanx></h1> */
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
