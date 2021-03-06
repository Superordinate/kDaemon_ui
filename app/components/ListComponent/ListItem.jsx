//Class for displaying a single item in a list
import React from 'react'

export default class ListItem extends React.Component {
	constructor(props) {
		super(props)

		const {item, itemClick} = this.props
	}
	render(){
		return (
			<li
			onClick={this.props.itemClick.bind(this, this.props.item.id)}
			>{this.props.item.name}</li>
		)
	}
}