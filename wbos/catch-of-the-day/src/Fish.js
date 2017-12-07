import React from 'react';

class Fish extends React.Component {
	render () {
			const {details}  = this.props;
			return (
				<li className="menu-fish">
					<img src={this.props.details.image} alt={this.props.details.name} />
					<h3 className="fish-name">
						{this.props.details.name}
						<span className="price">{this.props.details.price}</span>
					</h3>
					<p>{details.desc}</p>
					<button>Add To Order</button>
				</li>
				);
		}
}

export default Fish;