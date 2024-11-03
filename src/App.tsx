import './App.css';
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
`;

export default App;
