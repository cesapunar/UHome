import React, { Component } from 'react'
import { Login, Panel } from 'components'

export default class Home extends Component {
	constructor() {
		super()
		this.state = { connected:false }
	}
	setConnected() {
		this.setState({ connected:!this.state.connected })
	}
	render() {
		const { connected } = this.state
		return (
			<div>
				{!connected ? 
				<Login connect={this.setConnected.bind(this)}/> :
				<div class="init">
					<div class="container-fluid">
						<h1>¡Bienvenido a UHome!</h1>
						<Panel/>
					</div>
				</div>
				}
			</div>
		)
	}
}
