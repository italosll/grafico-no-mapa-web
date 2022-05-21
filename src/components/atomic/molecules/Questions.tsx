import { Flex, FlexProps } from '@chakra-ui/react';
import { useContext } from 'react';
import { FlowContext } from '../../../contexts/FlowContext';
import AccuracyQuestion from '../atoms/AccuracyQuestion';
import QualitativeQuestion from '../atoms/QualitativeQuestion';
import QuestionsArray from '../../../questions/Accuracy';
// eslint-disable-next-line max-len
import { AccuracyQuestionsContext } from '../../../contexts/AccuracyQuestionsContext';

const ContainerProps: FlexProps = {
  direction: 'column',
  marginTop: '2vh',
  height: '100%',
  justifyContent: 'space-around',

  width: {
    base: '100%',
    md: '100%',
    lg: '300px',
  },
  alignItems: 'center',
};
export default function Questions({ type }) {
  const { actualAccuracyQuestion } = useContext(AccuracyQuestionsContext);
  // console.log(actualAccuracyQuestion);

  return (
    <>
      {type === 'AccuracyQuestions' && (
        <Flex {...ContainerProps}>
          <AccuracyQuestion
            questionNumber={actualAccuracyQuestion}
            questionAlternative="a"
            questionText={` ${QuestionsArray[actualAccuracyQuestion - 1]?.a}`}
          />
          <AccuracyQuestion
            questionNumber={actualAccuracyQuestion}
            questionAlternative="b"
            questionText={` ${QuestionsArray[actualAccuracyQuestion - 1]?.b}`}
          />
          <AccuracyQuestion
            questionNumber={actualAccuracyQuestion}
            questionAlternative="c"
            questionText={` ${QuestionsArray[actualAccuracyQuestion - 1]?.c}`}
          />
          <AccuracyQuestion
            questionNumber={actualAccuracyQuestion}
            questionAlternative="d"
            questionText={` ${QuestionsArray[actualAccuracyQuestion - 1]?.d}`}
          />
        </Flex>
      )}
      {type === 'QualitativeQuestions' && (
        <Flex {...ContainerProps}>
          <QualitativeQuestion indexAnswer={0} text="Visualente agradável" />
          <QualitativeQuestion indexAnswer={1} text="Fácil de entender" />
          <QualitativeQuestion indexAnswer={2} text="Inovador" />
        </Flex>
      )}
    </>
  );
}
