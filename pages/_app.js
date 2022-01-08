import { store } from './_store';
import { Provider } from 'react-redux';
// Import styles css
import './main.css';

function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>

}

export default MyApp;