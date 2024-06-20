import { Card, Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        };
    };
}

const CompleteOrderForm = () => {
    const { register, formState } = useFormContext();
    const { errors } = formState as unknown as ErrorsType;

    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>Insira seus dados</Card.Title>
                <hr />
                <Form.Group controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="digite seu nome"
                        {...register('name')}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        type="text"
                        as={InputMask}
                        placeholder="(00) 00000-0000"
                        mask={"(99) 99999-9999"}
                        {...register('phone')}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="digite seu endereço"
                        {...register('address')}
                        isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.address?.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Card.Body>
        </Card>
    );
}

export default CompleteOrderForm;