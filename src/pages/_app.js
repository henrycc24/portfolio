import '../css/main.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MyApp({ Component, pageProps }) {
    useScrollReveal();
    return <Component {...pageProps} />;
}
