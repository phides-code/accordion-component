import styled from 'styled-components';
import Accordion from './Accordion';

function App() {
    return (
        <Wrapper>
            <Accordion />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 40rem;
    background-color: white;
    border-radius: 32px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export default App;
