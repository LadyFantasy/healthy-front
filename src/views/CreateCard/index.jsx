import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
import { CreateCardSelector } from "state/createCard/selectors";
// Components
import CreateCardForm from "components/CreateCard/CreateCardForm";
import TopNavbar from "components/_shared/TopNavbar";

// Styles
import "./index.scss";
import { Fragment } from "react";

const CreateCardView = () => {
	const [payload, setPayload] = useState(null);
	const history = useHistory();
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CreateCardSelector(state));

	useEffect(() => {
		if (payload === null) {
			return;
		}
		d(requestCreateCard(payload));
	}, [d, payload]);

	useEffect(() => {
		if (data) {
			const cardId = data.id;
			history.push(`/details/${cardId}`);
		}
	}, [data, loading, error, history]);

	return (
		<div className="main-container">
			<TopNavbar />
			<div className="create-card-container">
				<CreateCardForm setPayload={setPayload} />
			</div>
		</div>
	);
};

export default CreateCardView;
