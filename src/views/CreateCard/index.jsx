import React from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
import { CreateCardSelector } from "state/createCard/selectors";
// Components
import CreateCardForm from "components/CreateCard/CreateCardForm";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";

const CreateCardView = () => {
	const history = useHistory();
	const d = useDispatch();
	const { data, error, loading } = useSelector((state) => CreateCardSelector(state));

	function createCard(payload) {
		d(requestCreateCard(payload));
		// TODO: Si se crear correctamente la card redireccionar a Home
		if(data) history.push("/");
	}

	return (
		<div className="create-card-container">
			{error && <Alert showButtonClose error>
				No se pudo crear su tarjeta, Vulve a intentelo mas tarde!  
			</Alert> }
			<h1>Agregar artículo</h1>
			<CreateCardForm createCard={createCard} loading={loading} />
		</div>
	);
};

export default CreateCardView;
