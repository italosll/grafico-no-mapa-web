import {
  Box, Flex, FlexProps, Text,
} from '@chakra-ui/layout';
import { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { QualitativeQuestionsContext } from '../../../contexts/QualitativeQuestionsContext';
import DynamicEmoji from './DynamicEmoji';

const QualitativeQuestionContainer: FlexProps = {
  direction: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '1%',
  marginBottom: '2%',
  maxWidth: { base: '80vw', md: '30vw' },
  minWidth: { md: '50vw', lg: '20vw' },
};

const Alternative = ['a', 'b', 'c'];

export default function QualitativeQuestion({ indexAnswer, text }) {
  const {
    actualQualitativeAnswer,
    setActualQualitativeAnswer,
    actualQualitativeQuestion,
  } = useContext(QualitativeQuestionsContext);
  const [emojiAnswer, setEmojiAnswer] = useState('');

  useEffect(() => {
    let updatedAnswer = [];
    updatedAnswer = actualQualitativeAnswer;
    updatedAnswer[indexAnswer] = emojiAnswer;
    setActualQualitativeAnswer([...updatedAnswer]);
    if (emojiAnswer !== '') {
      localStorage.setItem(
        // eslint-disable-next-line max-len
        `q_${`${actualQualitativeQuestion}_${Alternative[indexAnswer]}`}`,
        emojiAnswer,
      );
    }
  }, [emojiAnswer]);

  useEffect(() => {
    if (
      actualQualitativeAnswer[indexAnswer] === undefined
      || actualQualitativeAnswer[indexAnswer] === ''
    ) {
      setEmojiAnswer('');
    }
  }, [actualQualitativeAnswer]);

  return (
    <Flex {...QualitativeQuestionContainer}>
      <Text
        minWidth={{ base: '50vw', md: '150px' }}
        width={{ base: '180px', lg: '300px', xl: '100%' }}
        marginBottom="5px"
        textAlign="left"
      >
        {text}
      </Text>
      <Flex
        rounded="full"
        justifyContent="space-between"
        width={{ base: '180px', lg: '300px' }}
      >
        <DynamicEmoji
          emoji="hated"
          emojiAnswer={emojiAnswer}
          setEmojiAnswer={setEmojiAnswer}
        />

        <DynamicEmoji
          emoji="didnt_enjoyed"
          emojiAnswer={emojiAnswer}
          setEmojiAnswer={setEmojiAnswer}
        />

        <DynamicEmoji
          emoji="ok"
          emojiAnswer={emojiAnswer}
          setEmojiAnswer={setEmojiAnswer}
        />

        <DynamicEmoji
          emoji="enjoyed"
          emojiAnswer={emojiAnswer}
          setEmojiAnswer={setEmojiAnswer}
        />

        <DynamicEmoji
          emoji="really_enjoyed"
          emojiAnswer={emojiAnswer}
          setEmojiAnswer={setEmojiAnswer}
        />
      </Flex>
    </Flex>
  );
}
