'use client';

import NumCardItem from './NumCardItem';

interface IProps {
  data: any;
  type: string;
}
export default function TimerClockV2(props: IProps) {
  const { data, type } = props;
  return (
    <div className='flex items-center mx-auto text-[#FFFFFF] gap-x-[10px] md:gap-x-[15px]'>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className='flex justify-start gap-x-[15px] items-center'
        >
          <NumCardItem time={String(item.val)} title={item.name} />
          {index !== data.length - 1 &&
            (type !== 'colon' ? (
              <div className=' flex flex-col items-center text-[#FFFFFF] font-semibold justify-center pb-[30px]'>
                -
              </div>
            ) : (
              <div className=' flex flex-col items-center text-[#FFFFFF] font-semibold justify-center pb-[20px] md:pb-[30px]'>
                <div className='aspect-[1]  bg-white w-[5px] md:w-2 mb-[8px]'></div>
                <div className=' aspect-[1] bg-white w-[5px] md:w-2'></div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
