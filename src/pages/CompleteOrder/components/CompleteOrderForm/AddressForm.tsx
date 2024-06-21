import { Col, Form, Row } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { ErrorsType } from "../../../../shared/types/ErrorsType";
import { zipCodeMask } from "../../../../utils/masks"
import CustomMaskedInput from "../../../../components/CustomMaskedInput";
import { useEffect } from "react";
import { fetchAddress } from "../../../../shared/api/api";

const AddressForm = () => {
    const { register, formState, control, watch, setValue, setError, clearErrors } = useFormContext();
    const { errors } = formState as unknown as ErrorsType;

    const zipCode = watch('zipCode')?.replace(/\D/g, '');

    useEffect(() => {
        const fetchData = async () => {
            try {
                clearErrors('zipCode');
                if (zipCode && zipCode.length === 8) {
                    const data = await fetchAddress(zipCode);
                    if (data && !data.erro) {
                        setValue('street', data.logradouro);
                        setValue('city', data.localidade);
                        setValue('state', data.uf);
                    } else {
                        setError('zipCode', {
                            type: 'manual',
                            message: 'CEP não encontrado',
                        });
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar o CEP:', error);
            }
        };
    
        fetchData();
    }, [zipCode, setValue, setError, clearErrors])

    return (
        <>
            <Row className="mb-3">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="zipCode" md={6} xs={5}>
                        <CustomMaskedInput
                            name="zipCode"
                            mask={zipCodeMask}
                            placeholder="CEP"
                            control={control}
                            errorMessage={errors.zipCode?.message}
                        />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="street" md={9} xs={9}>
                    <Form.Control
                        type="text"
                        placeholder="Rua"
                        {...register('street')}
                        isInvalid={!!errors.street}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.street?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="number" md={3} xs={3}>
                    <Form.Control
                        type="text"
                        placeholder="Nº"
                        {...register('number')}
                        isInvalid={!!errors.number}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.number?.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="city" md={7} xs={7}>
                    <Form.Control
                        type="text"
                        placeholder="Cidade"
                        {...register('city')}
                        isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.city?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="state" md={5} xs={5}>
                    <Form.Control
                        type="text"
                        placeholder="Estado"
                        {...register('state')}
                        isInvalid={!!errors.state}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.state?.message}
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control as="textarea" rows={2} placeholder="Complemento (opcional)" />
                </Form.Group>
            </Row>

        </>
    );
}

export default AddressForm;
