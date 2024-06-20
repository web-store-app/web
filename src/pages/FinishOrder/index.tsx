import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactInputMask from "react-input-mask";

interface FormData {
    name: string;
    phone: string;
    address: string;
}

export default function FinishOrder () {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        address: ''
    });
    
    const handleSubmit = () => {
        throw new Error("Function not implemented.");
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return(
        <>
            <h2>Finalizar Pedido</h2>
            
        </>
    );
}