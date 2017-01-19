import React, { Component } from 'react'
import $, { signIn, signUp } from 'actions'

export default class Login extends Component {
	constructor() {
		super()
		this.state = { isEmpty:true }
	}
	handlerSignUp(e) {
		e.preventDefault()
		signUp()
	}
	handlerSignIn(e) {
		e.preventDefault()
		signIn()
		this.props.connect()
	}
	handlerForgot() {
		alert('crear ventana')
	}
 	setIsEmpty() {
		this.setState({ isEmpty:!($('in-email').value.length > 0 && $('in-password').value.length > 5) })
	}
	render() {
		const { isEmpty } = this.state
		return (
			<div class="home">
				<header>
					<div class="cover">
						<nav>
							<ul class="sign-in container">
								<img src="images/logos/uhome.png"/>
								<div class="login">
									<button class="register">Regístrate</button>
								</div>
								<div class="login">
									<input id="in-email" type="email" onChange={this.setIsEmpty.bind(this)} placeholder="Correo electrónico"></input>
									<input id="in-password" type="password" onChange={this.setIsEmpty.bind(this)} placeholder="Contraseña"></input>
									{isEmpty ? 
										<button class="disabled" disabled>Inicia Sesión</button> : 
										<button type="submit" onClick={this.handlerSignIn.bind(this)}>Inicia Sesión</button>
									}				
									<br/><a class="forgot" onClick={this.handlerForgot}>¿Has olvidado tu contraseña?</a>
								</div>
							</ul>
						</nav>
						<div class="logo">
							<img class="center-block" src="images/logos/uc.png"/>
						</div>
						<h1>Pontificia Universidad Católica de Chile</h1>
						<h5>Avda. Libertador Bernardo OHiggins 340 - Santiago - Chile</h5>
						<button class="center-block">Ver lugares para reservar</button>			
					</div>
				</header>
				<footer>
					<div class="container">
						<nav>
							<ul>
								<li>UHome &copy; 2017</li>
								<li><a>Condiciones de uso</a></li>
								<li><a>Politica de privacidad</a></li>
								<li><a>Politica de cookies</a></li>
								<li><a>Condiciones de invitados</a></li>
								<li><a>Idioma</a></li>
							</ul>
						</nav>
					</div>
				</footer>
			</div>
		)
	}
}
