import React from 'react';
import './index.scss';
import { useHistory } from "react-router-dom"

const TopNavbar = ({}) => {
    const history = useHistory();
    const back = () => {
        history.goBack()
    }

    return (
        <nav className="topnavbar-container">
            <button onClick={back}>Cancelar</button>
            <h3>Agregar artículo</h3>
        </nav>
    );
}

export default TopNavbar; 