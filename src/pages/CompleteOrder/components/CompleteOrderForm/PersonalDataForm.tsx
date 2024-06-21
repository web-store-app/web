import { useFormContext } from "react-hook-form";
import { phoneMask } from "../../../../utils/masks";
import { Form } from "react-bootstrap";
import { ErrorsType } from "../../../../shared/types/ErrorsType";
import CustomMaskedInput from "../../../../components/CustomMaskedInput";

const PersonalDataForm = () => {
    const { register, formState, control } = useFormContext();

    const { errors } = formState as unknown as ErrorsType;
    return (
        <>
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
                <CustomMaskedInput
                    name="phone"
                    mask={phoneMask}
                    placeholder="(00) 00000-0000"
                    control={control}
                    errorMessage={errors.phone?.message}
                />
            </Form.Group>
        </>
    );
}

export default PersonalDataForm;