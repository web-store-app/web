import { Image } from 'react-bootstrap';
import "./style.scss"

interface StoreLogoProps{
    logo:string | undefined
}
export default function StoreLogo({logo}:StoreLogoProps){
    return (
        <>
            <Image src={logo} roundedCircle className="store-logo me-3" />
        </>
    );
}