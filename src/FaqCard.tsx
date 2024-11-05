import styled from 'styled-components';
import { Faq } from './faqs';
import { faqColors } from './colors';
import { motion } from 'framer-motion';

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

    const slideIn = {
        hidden: { y: '-100%' },
        visible: { y: 0 },
        exit: { y: '100%' },
    };

    return (
        <>
            {isActive ? (
                <>
                    <Wrapper $darkColor={darkColor} $lightColor={lightColor}>
                        <QuestionWrapper>
                            <ExpandedQuestionText>
                                {faq.question}
                            </ExpandedQuestionText>
                        </QuestionWrapper>

                        <ButtonArea>
                            <CollapseButton
                                $lightColor={lightColor}
                                onClick={() => handleCollapse()}
                            >
                                +
                            </CollapseButton>
                        </ButtonArea>
                    </Wrapper>
                    <AnswerMotion
                        $darkColor={darkColor}
                        $lightColor={lightColor}
                        key='slide-div'
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        variants={slideIn}
                        transition={{ type: 'tween', duration: 0.25 }}
                    >
                        <AnswerWrapper>{faq.answer}</AnswerWrapper>
                    </AnswerMotion>
                </>
            ) : (
                <Wrapper $darkColor={darkColor} $lightColor={lightColor}>
                    <QuestionWrapper>
                        <CollapsedQuestionText>
                            {faq.question}
                        </CollapsedQuestionText>
                    </QuestionWrapper>

                    <ButtonArea>
                        <ExpandButton
                            $lightColor={lightColor}
                            onClick={() => handleExpand(index)}
                        >
                            +
                        </ExpandButton>
                    </ButtonArea>
                </Wrapper>
            )}
        </>
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
    margin-top: 1rem;
    position: relative;
    z-index: 999;
`;

const TextWrapper = styled.div`
    padding: 1rem 0.5rem;
    text-align: left;
`;

const ButtonArea = styled.div`
    padding: 0.4rem 0.4rem 0 0;
    display: flex;
    align-items: flex-start;
`;
const QuestionWrapper = styled(TextWrapper)``;
const CollapsedQuestionText = styled.div``;
const AnswerWrapper = styled(TextWrapper)`
    padding-top: 0;
`;

const ExpandedQuestionText = styled.div`
    font-weight: bold;
`;

const AnswerMotion = styled(motion.div)<StyledComponentProps>`
    background: ${(props) => props.$lightColor};
    border-left: ${(props) => `3px solid ${props.$darkColor}`};
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
