import styled from 'styled-components';
import { Faq } from './faqs';
import { faqColors } from './colors';
import './styles.css'; // CSS file for animations

interface FaqCardProps {
    isActive: boolean;
    setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
    faq: Faq;
    index: number;
}

const FaqCard = ({ isActive, setSelectedCard, faq, index }: FaqCardProps) => {
    const handleExpand = (index: number) => {
        setSelectedCard(index);
    };

    const handleCollapse = () => {
        setSelectedCard(null);
    };

    const { darkColor, lightColor } = faqColors[index];

    return (
        <Wrapper $darkColor={darkColor} $lightColor={lightColor}>
            {isActive ? (
                <>
                    <TextArea>
                        <QuestionWrapper>
                            <ExpandedQuestionText>
                                {faq.question}
                            </ExpandedQuestionText>
                        </QuestionWrapper>

                        <AnswerWrapper>{faq.answer}</AnswerWrapper>
                    </TextArea>

                    <ButtonArea>
                        <CollapseButton
                            $lightColor={lightColor}
                            onClick={() => handleCollapse()}
                        >
                            +
                        </CollapseButton>
                    </ButtonArea>
                </>
            ) : (
                <>
                    <TextArea>
                        <QuestionWrapper>
                            <CollapsedQuestionText>
                                {faq.question}
                            </CollapsedQuestionText>
                        </QuestionWrapper>
                    </TextArea>

                    <ButtonArea>
                        <ExpandButton
                            $lightColor={lightColor}
                            onClick={() => handleExpand(index)}
                        >
                            +
                        </ExpandButton>
                    </ButtonArea>
                </>
            )}
        </Wrapper>
    );
};

interface StyledComponentProps {
    $darkColor?: string;
    $lightColor: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.$lightColor};
    border-left: ${(props) => `3px solid ${props.$darkColor}`};
    margin: 1rem 0;
`;

const TextArea = styled.div`
    padding: 1rem 0.5rem;
    text-align: left;
`;

const ButtonArea = styled.div`
    padding: 0.4rem 0.4rem 0 0;
    display: flex;
    align-items: flex-start;
`;
const QuestionWrapper = styled.div``;
const CollapsedQuestionText = styled.div``;

const ExpandedQuestionText = styled.div`
    font-weight: bold;
`;

const AnswerWrapper = styled.div`
    margin-top: 1rem;
`;
const StyledButton = styled.button<StyledComponentProps>`
    border: none;
    background: ${(props) => props.$lightColor};
    font-size: x-large;
`;
const ExpandButton = styled(StyledButton)``;
const CollapseButton = styled(StyledButton)`
    transform: rotate(45deg);
`;

export default FaqCard;
