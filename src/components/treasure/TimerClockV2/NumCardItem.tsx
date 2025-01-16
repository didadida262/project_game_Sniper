import { cn } from '@/lib/utils';

interface IProps {
  time: string;
  title: string;
}
export default function NumCardItem(props: IProps) {
  const { time, title } = props;
  return (
    <div className='flex flex-col items-center gap-y-[4px] md:gap-y-[8px] text-[#FFFFFF] font-semibold '>
      <div className='num flex items-center '>
        {time.split('').map((item: string, index: number) => (
          <div
            key={index}
            className={cn(
              'text-[30px] md:text-[40px] font-semibold leading-[30px] md:leading-[40px]'
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <span className={cn('text-[13px]')}>{title}</span>
    </div>
  );
}
