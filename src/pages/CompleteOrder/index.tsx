import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import CartEmpty from './components/CartEmpty';
import CompleteOrderForm from './components/CompleteOrderForm';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CartItemsList from './components/CartCardItems';
import OrderSumary from './components/OrderSumary';


const validationSchema = zod.object({
    name: zod.string().min(1, 'Informe o Nome'),
    phone: zod.string().min(1, 'Informe o Telefone'),
    address: zod.string().min(1, 'Informe o Endereço'),
});

type OrderData = zod.infer<typeof validationSchema>;
type ConfirmOrderFormData = OrderData;

export default function CompleteOrder() {
    const { cartItems, cartItemsTotal, cleanCart } = useCart();
    const navigate = useNavigate();

    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(validationSchema),
    });

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        // navigate("/orderConfirmed", {
        //     state: data,
        // });
        cleanCart();
    }

    if (!cartItems.length) return <CartEmpty />;

    return (
        <div className="mt-3">
            <FormProvider {...confirmOrderForm}>
                <form onSubmit={handleSubmit(handleConfirmOrder)}>

                    <h4 className="fw-bold">Itens adicionados</h4>
                    <Row className="my-4 mb-2 mt-2">
                        <CartItemsList cartItems={cartItems} />
                        <Col md={4}>
                            <CompleteOrderForm />

                            <OrderSumary total={cartItemsTotal} />

                            <div className='d-flex flex-column justify-content-center align-items-between mt-2'>
                                <Button type='submit' variant="success">
                                    Finalizar Pedido
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </FormProvider>
        </div>
    );
}