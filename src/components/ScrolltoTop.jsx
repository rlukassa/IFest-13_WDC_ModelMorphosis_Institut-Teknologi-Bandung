import { useEffect } from 'react'; 
import {useLocation } from 'react-router-dom'

export default function ScrolltoTop() {
    const { pathname } = useLocation();

    useEffect(() => { 
        window.scrollTo(0,0); 
        // ketika user melakukan scroll, maka akan diarahkan ke 0,0
    }, [pathname]);
}