import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Category, Product } from '../../shared/types/types';
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';
import Paginate from '../../components/Paginate';

const categoryList: Category[] = [
    {
        id: 1,
        name: "Bebidas",
        products: [
            { id: 1, name: "Coca-Cola", price: 11.50, description: "Refrigerante coca cola 2 Litros", image:"", CategoryId:1, quantityAvailable:10 },
            { id: 2, name: "Pepsi", price: 10.90, description: "Refrigerante pepsi 2 Litros", image:"", CategoryId:1, quantityAvailable:10 },
        ]
    },
    {
        id: 2,
        name: "Snacks",
        products: [
            { id: 3, name: "Batata Chips", price: 6.90, description: "Batata chips 900g", image:"", CategoryId:2, quantityAvailable:10 },
            { id: 4, name: "Amendoim", price: 7.50, description: "Amendoim japonês tradicional 200g", image:"", CategoryId:2, quantityAvailable:10 },
        ]
    },
    {
        id: 3,
        name: "Doces",
        products: [
            { id: 5, name: "Bombom", price: 2.90, description: "Bombom garoto serenata do amor", image:"", CategoryId:3, quantityAvailable:10 },
            { id: 6, name: "Bala fini dentadura", price: 7.50, description: "Bala fini dentaduro pacote 25g", image:"", CategoryId:3, quantityAvailable:10 },
            { id: 7, name: "Bombom", price: 2.90, description: "Bombom garoto serenata do amor", image:"", CategoryId:3, quantityAvailable:10 },
            { id: 8, name: "Bala fini dentadura", price: 7.50, description: "Bala fini dentaduro pacote 25g", image:"", CategoryId:3, quantityAvailable:10 },
            { id: 9, name: "Bombom", price: 2.90, description: "Bombom garoto serenata do amor", image:"", CategoryId:3, quantityAvailable:10 },
            { id: 10, name: "Bala fini dentadura", price: 7.50, description: "Bala fini dentaduro pacote 25g", image:"", CategoryId:3, quantityAvailable:10 },
        ]
    }
];

export function Home() {
    const [activeKey, setActiveKey] = useState('Tudo');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentCards, setCurrentCards] = useState<Product[]>([]);

    const itemsPerPage = 3;
    const totalCards = currentCards.length;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        if (activeKey === 'Tudo') {
            setCurrentCards(
                categoryList.flatMap(category => category.products)
            );
        } else {
            const categoriaSelecionada = categoryList.find(
                category => category.name === activeKey
            );
            setCurrentCards(categoriaSelecionada ? categoriaSelecionada.products : []);
        }
        setCurrentPage(1);
    }, [activeKey]);

    return (
        <div className="content mt-5">
            <div className="text-center mb-3">
                <h2>{activeKey}</h2>
            </div>
            <Row>
                <Col md={12}>
                    <Tabs
                        defaultActiveKey="Tudo"
                        id="category-tabs"
                        onSelect={(key) => setActiveKey(key)}
                        className="mb-5 justify-content-center"
                        variant="underline"
                    >
                        <Tab eventKey="Tudo" title="Tudo">
                            <Row>
                                {categoryList.flatMap((category) =>
                                    category.products.map((product) => (
                                        <Col md={6} key={product.id} className="d-flex justify-content-center">
                                            <ProductCard product={product} style={{ width: '40rem', marginBottom: "1rem" }} />
                                        </Col>
                                    ))
                                )}
                            </Row>
                        </Tab>
                        {categoryList.map((category) => (
                            <Tab eventKey={category.name} title={category.name} key={category.id}>
                                <Row className="d-flex justify-content-center">
                                    {category.products.map((product) => (
                                        <Col md={6} key={product.id} className="d-flex justify-content-center">
                                            <ProductCard product={product} style={{ width: '40rem', marginBottom: "1rem" }} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                        ))}
                    </Tabs>
                    {totalCards > itemsPerPage && (
                        <Paginate
                            totalItems={totalCards}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />)
                    }
                </Col>
            </Row>
        </div>
    );
}