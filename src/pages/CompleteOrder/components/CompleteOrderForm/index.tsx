import { Button, Card, Collapse } from "react-bootstrap";
import AddressForm from "./AddressForm";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PersonalDataForm from "./PersonalDataForm";

import "./scss/styles.scss"
import { useFormContext } from "react-hook-form";
import PaymentMethodOptions from "./PaymentMethodOptions";

const CompleteOrderForm = () => {
    const { formState } = useFormContext();
    const [openPersonalData, setOpenPersonalData] = useState(true);
    const [openAddress, setOpenAddress] = useState(true);
    const [openPaymentMethod, setOpenPaymentMehtod] = useState(true);

    const togglePersonalData = () => {
        setOpenPersonalData(!openPersonalData);
    };

    const toggleAddress = () => {
        setOpenAddress(!openAddress);
    };

    const togglePaymentMethod = () => {
        setOpenPaymentMehtod(!openPaymentMethod);
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
            togglePersonalData();

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
                            aria-controls="personal-data-collapse"
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
                        <span>Forma de pagamento</span>
                        <Button variant="outline-secundary" className="collapse-button"
                            onClick={togglePaymentMethod}
                            aria-controls="payment-method-collapse"
                            aria-expanded={openPaymentMethod}
                        >
                            {openPaymentMethod ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </Button>
                    </Card.Title>
                    <Collapse in={openPaymentMethod}>
                        <div>
                            <PaymentMethodOptions />
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
                            aria-controls="address-collapse"
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