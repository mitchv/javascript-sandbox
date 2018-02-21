"
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
html {  background: url('body-paint-react/3.jpg') no-repeat center center fixed;
  background-size: cover; }
body {
margin: 0;
padding: 0; 
  background: url('body-paint-react/3.jpg') repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
	#b1 { background: url('body-paint-react/12.jpg') no-repeat center center fixed; }
	#b2 { background: url('body-paint-react/1.jpg') no-repeat center center fixed; }
	#b3 { background: url('body-paint-react/6.jpg') no-repeat center center fixed; }
	#b4 { background: url('body-paint-react/8.jpg') no-repeat center center fixed; }
	#b5 { background: url('body-paint-react/10.jpg') no-repeat center center fixed; }
	#b6 { background: url('body-paint-react/11.jpg') no-repeat center center fixed; }
	
@media only screen and (orientation: portrait) {
  body {background: url('body-paint-react/13.jpg') repeat center center fixed; }
	#b1 { background: url('body-paint-react/2.jpg') no-repeat center center fixed; }
	#b2 { background: url('body-paint-react/4.jpg') no-repeat center center fixed; }
	#b3 { background: url('body-paint-react/5.jpg') no-repeat center center fixed; }
	#b4 { background: url('body-paint-react/7.jpg') no-repeat center center fixed; }
	#b5 { background: url('body-paint-react/9.jpg') no-repeat center center fixed; }
}
body > div
{
            width:100%;
            height:100%;
            background:#000000;
            border-radius:20vw;
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
		<div>
		<a href="http://behance.net/mitchv"><img src="nametype.png" align="center" height="50%" width="auto"></a>
		</div>
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
			
			run(8000, 7); //milliseconds, frames
		</script>
	</body>
</html>