import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Container className='min-vh-100'>
                <Outlet />
            </Container>
        </>
    );
}