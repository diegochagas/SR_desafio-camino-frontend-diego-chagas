import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .alert {
        width: 100%;
        text-align: center;
        margin-top: 30px;
    }

    .loading {
        margin-top: 30px;
    }

    .counter {
        margin: 20px 0;
    }

    .devices {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;

        .card {
            min-width: 300px;
            margin: 10px;
            flex: 1;
        }
    }
`;
