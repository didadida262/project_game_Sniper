'use client';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { TransformEffect } from '@/components/common/TransformEffect';

import arrow_r from '@/assets/images/airdrop/arrow_r.png';

import { partList } from './AirDropMap';

export default function SectionSecond() {
  const [activePart, setactivePart] = useState(partList[0]);
  return (
    <div className='SectionSecond font-Oswald w-[1081px] mx-auto pb-[120px]'>
      <TransformEffect data={{ y: 60 }}>
        <div
          className={cn(
            'font-medium  w-full h-[65px] flex justify-center items-center',
            'leading-[65px] text-[44px]'
          )}
        >
          Play, Explore, and Earn $W3C Airdrop!
        </div>
        <div
          className={cn(
            'w-full h-[419px] mt-[56px] ',
            'flex justify-between items-center'
          )}
        >
          <div className='w-[196px]  h-full flex flex-col justify-between'>
            {partList.map((part: any, index: number) => (
              <div
                key={index}
                className={cn(
                  ' rounded-[8px] text-[24px] font-medium pl-[25px] w-full h-[67.53px]',
                  'flex justify-start items-center',
                  'hover: cursor-pointer',
                  activePart.key === part.key
                    ? 'border-solid border-[1px] border-[#A383F266] bg-[#A383F233] text-[#D3B6FB]'
                    : 'bg-[#13131B] text-[#FFFFFF]'
                )}
                onClick={() => {
                  setactivePart(part);
                }}
              >
                {part.title}
              </div>
            ))}
          </div>
          {partList.map((part: any, partIndex: number) => (
            <div
              key={partIndex}
              className={cn(
                'relative w-[calc(100%_-_220px)] h-full px-[25px] py-[25px]',
                'animate-fadeIn',
                activePart.title === part.title ? 'block' : 'hidden'
              )}
            >
              <div className='absolute w-full h-full left-0 top-0 z-10'>
                <Image src={part.img} alt='' className='w-full h-full'></Image>
              </div>
              <div className={cn('w-full h-full z-20 relative max-w-[440px]')}>
                <div className={cn('')}>
                  <Image
                    src={part.titleImg}
                    alt=''
                    className={cn(part.titleImgClass)}
                  ></Image>
                </div>
                <div
                  className={cn(
                    'h-[50px] text-[34px] font-Oswald font-medium',
                    'mb-[12px] flex items-center',
                    part.secondTitleClass
                  )}
                >
                  {part.secondtitle}
                </div>
                <div className='text-[16px] font-Poppins mb-[24px]'>
                  {part.description}
                </div>
                <div className={cn('flex items-center justify-start')}>
                  {part.btns.map((btn: any, indexx: number) => (
                    <button
                      className={cn(
                        'font-Oswald text-[16px] font-semibold text-[#F9F7FF]',
                        'flex h-[44px] w-[150px] items-center justify-center rounded-md',
                        indexx !== 0
                          ? 'ml-[9px] bg-[radial-gradient(394.53%_143.73%_at_0%_0%,#3B4257.53%,#242937_100%)]'
                          : 'bg-[radial-gradient(394.53%_143.73%_at_0%_0%,#8558DD_0.53%,#4A28C8_100%)]'
                      )}
                      key={indexx}
                    >
                      {btn.text}
                      {indexx === 0 && (
                        <Image
                          src={arrow_r}
                          alt=''
                          className='w-[15px] ml-[5px]'
                        ></Image>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TransformEffect>
    </div>
  );
}
