import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CompleteOrderHeader from "../../components/CompleteOrderHeader";

import "./styles.scss";

export function CompleteOrderLayout() {
    return (
        <>
            <CompleteOrderHeader />
            <Container className='completeOrderContainer'>
                <Outlet />
            </Container>
        </>
    );
}