import ReactDOM from 'react-dom';
import configureStore from 'store';
import Root from './components/root';
import './index.css';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});