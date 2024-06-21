import { Form } from "react-bootstrap";
import { Controller, Control, FieldValues } from "react-hook-form";
import MaskedInput from "react-text-mask";

interface CustomFieldProps {
    name: string;
    mask: Array<string | RegExp>;
    placeholder: string;
    control: Control<FieldValues, any>;
    errorMessage: string;
}

const CustomMaskedInput = ({ name, mask, placeholder, control, errorMessage }: CustomFieldProps) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={""}
                render={({ field }) => (
                    <>
                        <MaskedInput
                            {...field}
                            mask={mask}
                            placeholder={placeholder}
                            className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                        />
                        {errorMessage && (
                            <Form.Control.Feedback type="invalid">
                                {errorMessage}
                            </Form.Control.Feedback>
                        )}
                    </>
                )}
            />
        </>
    );
};

export default CustomMaskedInput;
