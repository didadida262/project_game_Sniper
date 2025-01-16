import { cn } from '@/lib/utils';

interface IWordsTitleProps {
  className?: string;
  words: Array<{ text: string; isHighlight?: boolean }>;
}
export function WordsTitle(props: IWordsTitleProps) {
  const { className, words } = props;
  return (
    <h2
      className={cn(
        'text-3xl font-bold leading-normal sm:text-[44px]',
        className
      )}
    >
      {words.map((item, index) => (
        <span
          key={index}
          className={cn(
            item.isHighlight &&
              // "bg-[radial-gradient(64.69%_64.69%_at_50%_50%,#ede4fe_0%,#7366a1_95.98%)] bg-clip-text text-transparent"
              'bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#9C72FF] bg-clip-text text-transparent'
          )}
        >
          {item.text}
        </span>
      ))}
    </h2>
  );
}
