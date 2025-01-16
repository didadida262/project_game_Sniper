'use client';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import faq_closed from '@/assets/images/treasure/faq_closed.png';
import faq_opened from '@/assets/images/treasure/faq_opened.png';

import { FAQsList } from './TreasureMap';

export default function Faq() {
  const [activeFAQ, setactiveFAQ] = useState({}) as any;

  return (
    <div className='mx-auto w-full px-[10px] pb-[120px] font-Oswald md:w-[1081px] md:px-0'>
      <div
        className={cn(
          'mb-[24px]  flex h-[65px] w-full items-center justify-center font-medium',
          'text-[22px] leading-[65px] md:text-[44px]'
        )}
      >
        FAQs
      </div>
      <div className={cn(' min-h-[519px] pt-[24px]')}>
        <div className={cn('w-full')}>
          {FAQsList.map((item: any, index: number) => (
            <div
              key={index}
              className={cn(
                'w-full rounded-[4px] bg-[#111423] md:rounded-[16px]',
                'transform duration-200',
                index !== 0 ? 'mt-[5px] md:mt-[16px]' : '',
                'border-[1px] border-solid border-[#363B4F]'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-start ',
                  'hover:cursor-pointer',
                  'h-[50px] px-[8px] md:h-[72px] md:px-[25px] md:py-[21px]'
                )}
                onClick={() => {
                  if (activeFAQ.question === item.question) {
                    setactiveFAQ({});
                  } else {
                    setactiveFAQ(item);
                  }
                }}
              >
                {activeFAQ && activeFAQ.question === item.question ? (
                  <Image
                    src={faq_opened}
                    alt=''
                    className={cn('w-[24px] select-none', 'duration-500')}
                  />
                ) : (
                  <Image
                    src={faq_closed}
                    alt=''
                    className={cn('w-[24px] select-none', 'duration-500')}
                  />
                )}
                <span
                  className={cn(
                    'ml-[16px] font-Poppins text-[14px] font-medium md:text-[20px]'
                  )}
                >
                  {item.question}
                </span>
              </div>
              {activeFAQ && activeFAQ.question === item.question && (
                <div
                  className={cn(
                    'w-full px-[8px] pb-[8px] font-Poppins text-[12px] text-[#B3B3C0] md:px-[25px] md:pb-[21px] md:text-[16px]',
                    'animate-fadeIn'
                  )}
                >
                  {item.answer.map(
                    (textItem: string, textItemIndex: number) => (
                      <div
                        key={textItemIndex}
                        className={cn(
                          'mb-[10px] py-[6px] px-[10px] md:py-[12px] md:px-[40px]',
                          'bg-[#FFFFFF08]'
                        )}
                      >
                        <span className='text-[14px] md:text-[16px] text-[#B3B3C0] font-Poppins'>
                          {textItem}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
