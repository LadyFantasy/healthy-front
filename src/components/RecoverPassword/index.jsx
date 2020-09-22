import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";

const RecoverPassword = ({ sendLogin }) => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const onSubmit = async ({ usernameOrEmail, password }) => {
		sendLogin(
			JSON.stringify({
				usernameOrEmail,
				password,
			}),
		);
	};

	return (
		<form className="form__login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<label className="user-input" name="usernameOrEmail">
				Email/Usuario
				<input
					type="text"
					name="usernameOrEmail"
					placeholder="ejemplo@healthydev.com"
					ref={register({ required: true, maxLength: 100, minLength: 4 })}
				/>
			</label>
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "required" && (
				<MessageError message="Ingrese su usuario o email." />
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
