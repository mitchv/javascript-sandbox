"
Todo: Finish card impact estimator, publish on github pages, infinite.js



#My pomodoro clock:
	*
1. ##- JavaScript stuff -
	* Is synced to the computer clock and resets every hour
	* Cannot be paused
	* Has four blocks per hour: two on-blocks or works (B*) and two off-blocks or breaks (b*)
	* Default block lengths: B1 = 15, b2 = 5, B3 = 20, b4 = 10
	*
	*
2. ##- HTML stuff - 
	* Draws a wedge shape of 1 degree every 10 seconds until it fills a circle.
	* Switches from Color 1 to Color 2 depending on whether break is 'on' or 'off'.
	* Title and background colors also change. (SASS?)
	*
3. ##- CSS stuff -
	* Plays a 'yoohoo' whistle sound when break starts
	* Plays a 'honk' noise when break ends
"


I'm a Seattle-based front-end web developer and designer

My degree is in Visual Communications from Whatcom Community College up in Bellingham, where I started out as a print production artist and later moved into the game industry doing Flash animation. I spent longer than I care to admit specializing in Flash, and obviously reached a pivot point around 2011 into front-end web development, which has been my primary focus since leaving my last full-time design position. I have a wide variety of freelance projects under my belt utilizing technologies like WordPress, Drupal, React.js, Angular.js, jQuery, Bootstrap and SASS, on top of a solid foundation with HTML, CSS and JavaScript Core.

<html>
<head>
<title>VeggART.com // Design by Mitch Vega</title>
<style type="text/css"> 
html {  background: #000000;}
body {width:100%;height:100%;
color:#ffffff;font-size:26pt; font-family:sans-serif; margin: 0; padding: 0; 
  background: url('body-paint-react/horiz/0.jpg') repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
ul {list-style-type:none;}
	a {color:#ffffff;text-decoration:none;}
	#b1 { background: url('body-paint-react/horiz/1.jpg') no-repeat center center fixed; }
	#b2 { background: url('body-paint-react/horiz/2.jpg') no-repeat center center fixed; }
	#b3 { background: url('body-paint-react/horiz/3.jpg') no-repeat center center fixed; }
	#b4 { background: url('body-paint-react/horiz/4.jpg') no-repeat center center fixed; }
	#b5 { background: url('body-paint-react/horiz/5.jpg') no-repeat center center fixed; }
	#b6 { background: url('body-paint-react/horiz/6.jpg') no-repeat center center fixed; }
	#b7 { background: url('body-paint-react/horiz/7.jpg') no-repeat center center fixed; }
	#b8 { background: url('body-paint-react/horiz/8.jpg') no-repeat center center fixed; }	
	#b9 { background: url('body-paint-react/horiz/9.jpg') no-repeat center center fixed; }
	
@media only screen and (orientation: portrait) {
  body {background: url('body-paint-react/vert/0.jpg') repeat center center fixed; }
	#b1 { background: url('body-paint-react/vert/1.jpg') no-repeat center center fixed; }
	#b2 { background: url('body-paint-react/vert/2.jpg') no-repeat center center fixed; }
	#b3 { background: url('body-paint-react/vert/3.jpg') no-repeat center center fixed; }
	#b4 { background: url('body-paint-react/vert/4.jpg') no-repeat center center fixed; }
	#b5 { background: url('body-paint-react/vert/5.jpg') no-repeat center center fixed; }
	#b6 { background: url('body-paint-react/vert/6.jpg') no-repeat center center fixed; }
	#b7 { background: url('body-paint-react/vert/7.jpg') no-repeat center center fixed; }
	#b8 { background: url('body-paint-react/vert/8.jpg') no-repeat center center fixed; }	
	#b9 { background: url('body-paint-react/vert/9.jpg') no-repeat center center fixed; }
}
body > div
{
            width:100%;
            height:100%;
            background-color:#000000;
            border-radius:30vw;
            opacity:0.6;
            transition:all 0.8s ease;
}
body > div > img
{
min-height:100px;
min-width:100px;
}

			
</style>
</head>
	<body>
		<a href="http://behance.net/mitchv">
		<div>
<img src="nametype.png" align="center" height="50%" width="auto"><ul><li>Portfolio</li><a href="about.html"><li>About</li></a><a href="http://linkedin.com/in/mitchell-vega-31550413/"><li>LinkedIn</li></a></ul>
		</div>
		</a>
		<script type="text/javascript">
					function run(interval, frames) {
			    var int = 1;
			    
			    function func() {
			        document.body.id = "b"+int;
			        int++;
			        if(int === frames) { int = 1; }
			    }
			    
			    var swap = window.setInterval(func, interval);
			}
			
			run(8000, 10); //milliseconds, frames
		</script>
	</body>
</html>