import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
/* import { requestLogin } from "state/login/actions";
import { LoginSelector } from "state/login/selectors"; */
// Components
import RecoverPassword from "components/RecoverPassword";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";

const RecoverPasswordView = () => {
	const history = useHistory();

	return (
		<div className="login-container">
			{/* 			{error ? (
				<Alert showButtonClose error>
					Disculpa, no pudimos loguear tu usuario con esa información.{" "}
					<a href="" onClick={() => history.push("/reset_password")}>
						¿Necesitás resetear tu contraseña?
					</a>
				</Alert>
			) : null} */}
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
			<RecoverPassword />
			<footer>
				<p>¿Todavía no tenés una cuenta?</p>
				<p
					role="button"
					className="button__link"
					onClick={() => history.push("/register")}
				>
					Registrate
				</p>
			</footer>
		</div>
	);
};

export default RecoverPasswordView;
