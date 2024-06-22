import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { OrderData } from "../CompleteOrder";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationType {
    state: OrderData;
}

export default function CompletedOrder() {
    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    const handleOpenWhatsApp = () => {
        window.open('https://wa.me/5531991324075', '_blank');
    };

    useEffect(() => {
        if (!state) {
            navigate("/");
        }
    }, []);

    if (!state) return <></>;

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className='text-center m-3'>Pedido enviado</h2>
            <p className="text-center">Acompanhe o pedido e finalize o pagamento no whatsapp</p>
            <div className="text-center mt-3">
                <Button variant="success" className="d-flex align-items-center justify-content-center" onClick={handleOpenWhatsApp}>
                    <span>Abrir WhatsApp</span>
                    <span className="ms-3">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                    </span>
                </Button>
            </div>
        </div>
    );
}