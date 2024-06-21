import { Button, Card, Col, Collapse, Form, Row } from "react-bootstrap";
import AddressForm from "./AddressForm";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PersonalDataForm from "./PersonalDataForm";

import "./scss/styles.scss"
import { useFormContext } from "react-hook-form";

interface CompleteOrderFormProps {
    personalDataValid: boolean;
    addressValid: boolean;
}

const CompleteOrderForm = () => {
    const { formState } = useFormContext();
    const [openPersonalData, setOpenPersonalData] = useState(true);
    const [openAddress, setOpenAddress] = useState(true);

    const togglePersonalData = () => {
        setOpenPersonalData(!openPersonalData);
    };

    const toggleAddress = () => {
        setOpenAddress(!openAddress);
    };

    useEffect(() => {
        const  isPersonalDataValid = !formState.errors?.name && !formState.errors?.phone;
        const  isAddressValid =
        !formState.errors?.street &&
        !formState.errors?.number &&
        !formState.errors?.city &&
        !formState.errors?.state &&
        !formState.errors?.zipCode;

        if(!isPersonalDataValid && !openPersonalData)
            togglePersonalData()

        if(!isAddressValid && !openAddress)
            toggleAddress();
    }, [formState])

    return (
        <>
            <Card className="m-2">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <span>Insira seus dados</span>
                        <Button variant="outline-secundary" className="collapse-button"
                            onClick={togglePersonalData}
                            aria-controls="example-collapse-text"
                            aria-expanded={openPersonalData}
                        >
                            {openPersonalData ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </Button>
                    </Card.Title>
                    <Collapse in={openPersonalData}>
                        <div>
                            <PersonalDataForm />
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
            <Card className="m-2">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <span>Endereço de entrega</span>
                        <Button variant="outline-secundary" className="collapse-button"
                            onClick={toggleAddress}
                            aria-controls="example-collapse-text"
                            aria-expanded={openAddress}
                        >
                            {openAddress ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </Button>
                    </Card.Title>
                    <Collapse in={openAddress}>
                        <div>
                            <AddressForm />
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </>
    );
}

export default CompleteOrderForm;