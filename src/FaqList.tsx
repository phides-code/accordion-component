import styled from 'styled-components';
import { faqs } from './faqs';
import { useState } from 'react';
import FaqCard from './FaqCard';

const FaqList = () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <Wrapper>
            {faqs.map((faq, index) => {
                const isActive = index === selectedCard;

                return (
                    <FaqCard
                        key={faq.question}
                        faq={faq}
                        index={index}
                        isActive={isActive}
                        setSelectedCard={setSelectedCard}
                    />
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default FaqList;
