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


---



background-color: #ffff99;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cg fill='%23ffd573'%3E%3Cpolygon points='1000%2C-50 0%2C-50 500%2C450'/%3E%3Cpolygon points='550%2C500 1050%2C1000 1050%2C0'/%3E%3Cpolygon points='-50%2C0 -50%2C1000 450%2C500'/%3E%3Cpolygon points='0%2C1050 1000%2C1050 500%2C550'/%3E%3C/g%3E%3Cg fill='%23ffaa4d'%3E%3Cpolygon points='1000%2C-133.3 0%2C-133.3 500%2C366.7'/%3E%3Cpolygon points='633.3%2C500 1133.3%2C1000 1133.3%2C0'/%3E%3Cpolygon points='-133.3%2C0 -133.3%2C1000 366.7%2C500'/%3E%3Cpolygon points='0%2C1133.3 1000%2C1133.3 500%2C633.3'/%3E%3C/g%3E%3Cg fill='%23ff8026'%3E%3Cpolygon points='1000%2C-216.7 0%2C-216.7 500%2C283.3'/%3E%3Cpolygon points='716.7%2C500 1216.7%2C1000 1216.7%2C0'/%3E%3Cpolygon points='-216.7%2C0 -216.7%2C1000 283.3%2C500'/%3E%3Cpolygon points='0%2C1216.7 1000%2C1216.7 500%2C716.7'/%3E%3C/g%3E%3Cg fill='%23F50'%3E%3Cpolygon points='1000%2C-300 0%2C-300 500%2C200'/%3E%3Cpolygon points='800%2C500 1300%2C1000 1300%2C0'/%3E%3Cpolygon points='-300%2C0 -300%2C1000 200%2C500'/%3E%3Cpolygon points='0%2C1300 1000%2C1300 500%2C800'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='%23FE0' points='0%2C707.1 0%2C292.9 292.9%2C0 707.1%2C0 1000%2C292.9 1000%2C707.1 707.1%2C1000 292.9%2C1000'/%3E%3Cg fill='%23ffc800'%3E%3Cpolygon points='464.6%2C-242.5 -242.5%2C464.6 464.6%2C464.6'/%3E%3Cpolygon points='535.4%2C464.6 1242.5%2C464.6 535.4%2C-242.5'/%3E%3Cpolygon points='-242.5%2C535.4 464.6%2C1242.5 464.6%2C535.4'/%3E%3Cpolygon points='535.4%2C1242.5 1242.5%2C535.4 535.4%2C535.4'/%3E%3C/g%3E%3Cg fill='%23ffa200'%3E%3Cpolygon points='405.7%2C-301.4 -301.4%2C405.7 405.7%2C405.7'/%3E%3Cpolygon points='594.3%2C405.7 1301.4%2C405.7 594.3%2C-301.4'/%3E%3Cpolygon points='-301.4%2C594.3 405.7%2C1301.4 405.7%2C594.3'/%3E%3Cpolygon points='594.3%2C1301.4 1301.4%2C594.3 594.3%2C594.3'/%3E%3C/g%3E%3Cg fill='%23ff7b00'%3E%3Cpolygon points='346.8%2C-360.3 -360.3%2C346.8 346.8%2C346.8'/%3E%3Cpolygon points='653.2%2C346.8 1360.3%2C346.8 653.2%2C-360.3'/%3E%3Cpolygon points='-360.3%2C653.2 346.8%2C1360.3 346.8%2C653.2'/%3E%3Cpolygon points='653.2%2C1360.3 1360.3%2C653.2 653.2%2C653.2'/%3E%3C/g%3E%3Cg fill='%23F50'%3E%3Cpolygon points='287.9%2C-419.2 -419.2%2C287.9 287.9%2C287.9'/%3E%3Cpolygon points='712.1%2C287.9 1419.2%2C287.9 712.1%2C-419.2'/%3E%3Cpolygon points='-419.2%2C712.1 287.9%2C1419.2 287.9%2C712.1'/%3E%3Cpolygon points='712.1%2C1419.2 1419.2%2C712.1 712.1%2C712.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
background-position: center;