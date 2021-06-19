import { Image, ImageProps } from '@chakra-ui/image';
import { background } from '@chakra-ui/styled-system';

const EmojiProps: ImageProps = {
  width: { base: '7vw', md: '30px' },
  height: { base: '7vw', md: '30px' },
};

export default function DynamicEmoji({ emoji, setEmojiAnswer, emojiAnswer }) {
  return (
    <Image
      onClick={() => setEmojiAnswer(`${emoji}`)}
      {...EmojiProps}
      src={`/emojis/${emoji}.svg`}
      filter={
        emojiAnswer === `${emoji}` ? 'grayscale(0%);' : 'grayscale(100%);'
      }
      opacity={emojiAnswer === `${emoji}` ? '100%' : '50%;'}
    />
  );
}
