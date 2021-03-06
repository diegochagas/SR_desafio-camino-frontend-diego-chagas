import { createGlobalStyle } from 'styled-components';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

/* Add your CSS here. This file should */
/* automatically hot reload into the app on save */
export default createGlobalStyle`
    body {
        margin-right: auto !important;
        margin-left: auto !important;
        width: 70%;
    }

    .instructions {
        border: 2px solid #202936;
        border-radius: 30px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        width: 500px;
        margin-top: 50px;
    }
`;