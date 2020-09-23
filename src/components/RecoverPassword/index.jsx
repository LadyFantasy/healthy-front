import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";

const RecoverPassword = ({ setEmail }) => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const onSubmit = ({ email }) => {
		setEmail(email);
	};

	const EMAIL_FORMAT = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

	return (
		<form className="form__login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<label className="user-input" name="email">
				Email
				<input
					type="email"
					name="email"
					placeholder="ejemplo@healthydev.com"
					ref={register({
						required: true,
						maxLength: 100,
						minLength: 4,
						pattern: EMAIL_FORMAT,
					})}
				/>
			</label>
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "required" && (
				<MessageError message="Ingrese su email." />
			)}
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "maxLength" && (
				<MessageError message="Máximo 100 caracteres." />
			)}
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "minLength" && (
				<MessageError message="Mínimo 4 caracteres." />
			)}

			<Button className="button__login" fullWidth>
				Enviar
			</Button>
		</form>
	);
};
export default RecoverPassword;
