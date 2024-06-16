import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import StoreLogo from "../StoreLogo";
import useStore from '../../hooks/useStore';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export default function CompleteOrderHeader() {
    const { store } = useStore();
    const navigate = useNavigate();
    
    const handleContinueShopping = () => {
        navigate('/');
    };

    return (
        <header className="completeOrderHeader white-smoke-bg">
            <div className="d-flex">
                <Button variant="secundary" onClick={handleContinueShopping}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '0.5rem' }} />
                    Retornar
                </Button>
            </div>
            <StoreLogo logo={store?.logo} />
        </header>
    );
}