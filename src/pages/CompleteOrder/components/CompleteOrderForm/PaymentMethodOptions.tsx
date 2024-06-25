import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
    card: {
        label: "Cartão",
        icon: <FontAwesomeIcon icon={faCreditCard} size="1x" />
    },
    money: {
        label: "Dinheiro",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar} size="1x" />,
    },
    pix: {
        label: "PIX",
        icon: <FontAwesomeIcon icon={faPix} size="1x" />
    }
};

const PaymentMethodOptions = () => {
    const { register, formState: { errors } } = useFormContext();
    const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

    return (
        <Form.Group controlId="paymentMethod">
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <Form.Check
                inline
                id={key}
                className="btn-secondary"
                key={key}
                type="radio"
                value={key}
                label={
                    <span>
                        {icon}
                        {" "}
                        {label}
                    </span>
                }
                {...register("paymentMethod")}
            />
        ))}
        {paymentMethodError && (
            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                {paymentMethodError}
            </Form.Control.Feedback>
        )}
    </Form.Group>
    );
}

export default PaymentMethodOptions;