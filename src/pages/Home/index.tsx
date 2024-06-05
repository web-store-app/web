import { useEffect, useMemo, useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import useStore from '../../hooks/useStore';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../shared/types/types';

export function Home() {
    const { categories } = useStore();
    const [activeKey, setActiveKey] = useState<string>('Tudo');
    const [currentCards, setCurrentCards] = useState<Product[]>([]);

    const categoriesName = useMemo(() => categories.map(category => category.name), [categories]);
    const categoriesList = useMemo(() => ["Tudo", ...categoriesName], [categoriesName]);

    useEffect(() => {
        if (categories.length > 0) {
            if (activeKey === 'Tudo') {
                setCurrentCards(categories.flatMap(category => category.products));
            } else {
                const selectedCategory = categories.find(category => category.name === activeKey);
                setCurrentCards(selectedCategory ? selectedCategory.products : []);
            }
        }
    }, [activeKey, categories]);

    return (
        <div className="content mt-5">
            <div className="text-center mb-3">
                <h2>{activeKey}</h2>
            </div>
            <Row>
                <Col md={12}>
                    <Tabs
                        activeKey={activeKey}
                        onSelect={(key) => setActiveKey(key || 'Tudo')}
                        className="mb-5 justify-content-center"
                        variant="underline"
                    >
                        {categoriesList.map((category, index) => (
                            <Tab eventKey={category} title={category} key={category + index}>
                                <Row className="d-flex justify-content-center">
                                    {currentCards.map((product) => (
                                        <Col md={6} key={product.id} className="d-flex justify-content-center">
                                            <ProductCard product={product} style={{ width: '40rem', marginBottom: "1rem" }} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                        ))}
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
}