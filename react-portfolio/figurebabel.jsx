const { render } = ReactDOM;

let breakPoints = [350, 500, 750];
let images = [];
const imgId = [234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253,];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
		images.push("http://veggart.com/figure-drawings/d (" + imgId[i] + ").jpg");
}

class App extends React.Component{
	render(){
		return (
			<div className="container">
				<div className="masonry-container">
					<p onclick="appendTwenty()">Drawings & React / Masonry JS Gallery by Mitch Vega</p>
					<Masonry breakPoints={this.props.breakPoints}>
						{this.props.images.map((image, id) => {
							return (
								<Tile src={image} />
							) 
						})}
					</Masonry>
				</div>
			</div>
		)
	}
}

const Tile = ({src}) => {
  return (
    <div className="tile">
			<a href={src} target="_blank">
			<img src={src} />
			</a>
		</div>
  );
};

class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(w){
		return this.props.breakPoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.breakPoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div key={i} >{child}</div>
							})}
						</div>
					)
				})}
			</div>
		)
	}
}


render(<App images = {images} breakPoints={breakPoints} />, app);
