import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CartEmpty = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light d-flex justify-content-center align-items-center rounded-circle" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faCartPlus} size="3x"/>
            </div>
            <h2 className='text-center m-3'>Nenhum produto adicionado ao carrinho.</h2>
        </div>
    );
};

export default CartEmpty;
