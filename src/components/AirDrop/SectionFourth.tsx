'use client';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { TransformEffect } from '@/components/common/TransformEffect';

import arrow_down from '@/assets/images/airdrop/arrow_down.png';

import { FAQsList } from './AirDropMap';

export default function SectionFourth() {
  const [activeFAQ, setactiveFAQ] = useState({}) as any;
  return (
    <div className='font-Oswald w-[1081px] mx-auto pb-[120px]'>
      <TransformEffect data={{ y: 60 }}>
        <div
          className={cn(
            'font-medium  w-full h-[65px] flex justify-center items-center mb-[24px]',
            'leading-[65px] text-[44px]'
          )}
        >
          FAQs
        </div>
        <div
          className={cn(
            ' min-h-[519px] pt-[24px]',
            'border-solid border-[#2D2D3D] border-t-[2px]'
          )}
        >
          <div className={cn('w-full')}>
            {FAQsList.map((item: any, index: number) => (
              <div
                key={index}
                className={cn(
                  'bg-[#13131B] rounded-[8px] w-full',
                  'duration-200 transform',

                  index !== 0 ? 'mt-[16px]' : ''
                )}
              >
                <div
                  className={cn(
                    'flex justify-between items-center ',
                    'hover:cursor-pointer',
                    'px-[25px] py-[21px] h-[72px]'
                  )}
                  onClick={() => {
                    if (activeFAQ.title === item.title) {
                      setactiveFAQ({});
                    } else {
                      setactiveFAQ(item);
                    }
                  }}
                >
                  <span className={cn('text-[20px] font-medium font-Poppins')}>
                    {item.title}
                  </span>
                  <Image
                    src={arrow_down}
                    alt=''
                    className={cn(
                      'w-[19.8px] select-none',
                      'duration-500',
                      activeFAQ && activeFAQ.title === item.title
                        ? 'rotate-180 '
                        : ''
                    )}
                  />
                </div>
                {activeFAQ && activeFAQ.title === item.title && (
                  <div
                    className={cn(
                      'w-full px-[25px] pb-[21px] text-[#B3B3C0] text-[16px] font-Poppins',
                      'animate-fadeIn'
                    )}
                  >
                    {item.describe}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </TransformEffect>
    </div>
  );
}
