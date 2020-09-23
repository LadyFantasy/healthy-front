import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Components
import RecoverPassword from "components/RecoverPassword";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";

const RecoverPasswordView = () => {
	const history = useHistory();
	const [email, setEmail] = useState(null);

	useEffect(() => {}, [email, setEmail]);

	return (
		<div className="recover-container">
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
			<div className="recover-content">
				<div className="recover-text">
					<h2>Recuperá tu contraseña</h2>
					<p>
						Ingresá el email asociado a tu cuenta y te mandaremos un mensaje con un link
						para cambiar tu contraseña
					</p>
				</div>
				<RecoverPassword setEmail={setEmail} />
			</div>
		</div>
	);
};

export default RecoverPasswordView;
