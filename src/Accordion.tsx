import styled from 'styled-components';
import FaqList from './FaqList';

const Accordion = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderText>Frequently Asked Questions</HeaderText>
                <SubHeader>
                    Answers to common questions about our frontend challenges
                    website.
                </SubHeader>
            </HeaderWrapper>
            <FaqList />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 2.5rem 4rem;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderText = styled.div`
    font-size: xx-large;
`;

const SubHeader = styled.div`
    max-width: 18rem;
`;

export default Accordion;
