import Image from 'next/image'
import appImg from '../app/assets/images/whatsapp.png'

export default function Whatsapp() {
    return (
        <a href="https://wa.me/999999999?text=urlencodedtext">
            <Image src={appImg} alt='Whatsapp'/>
        </a>
    );
}