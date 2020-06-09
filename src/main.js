import './scss/app.scss';
import App from './app';

const app = () => {
    document.getElementById('app').appendChild(App());
};
// Load app
app();
