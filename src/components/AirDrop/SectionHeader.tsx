'use client';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { TransformEffect } from '@/components/common/TransformEffect';

import arrow_r from '@/assets/images/airdrop/arrow_r.png';
import logo_umbrella from '@/assets/images/airdrop/logo_umbrella.png';

export default function SectionHeader() {
  const handleLearnMore = () => {
    console.log('jump');
  };
  return (
    <div className='mb-[88px]'>
      <div
        className={cn(
          'first bg-cover bg-no-repeat bg-center h-[393px] -mt-[50px]',
          'flex items-end justify-center'
        )}
        style={{
          backgroundImage: `url(./assets/airdrop/header_bg.png)`,
        }}
      >
        <TransformEffect data={{ y: 60 }}>
          <div
            className={cn(
              'text-[96px] font-Oswald w-[933px] h-[90px] font-medium mb-[40px]',
              'flex items-center justify-center',
              'bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#9C72FF] bg-clip-text text-transparent'
            )}
          >
            WORLD3 TGE & AIRDROP
          </div>
        </TransformEffect>
      </div>

      <div className='w-[914px] flex flex-col justify-start items-center mx-auto gap-y-[12px]'>
        <TransformEffect data={{ y: 60 }}>
          <div className='text-[16px] font-Poppins text-[#A8A7AD]'>
            WORLD3 is airdropping{' '}
            <Image src={logo_umbrella} alt='' className='inline-block'></Image>
            <span className='text-[#996EFF]'>150 Million $W3C tokens</span>{' '}
            during the Token Generation Event (TGE) to Lumens and PSP holders.
            Seize your chance by participating in activities, earning Lumens,
            and securing your spot in the airdrop.
          </div>
        </TransformEffect>
        <TransformEffect data={{ y: 60 }}>
          <div
            className={cn(
              'text-[18px] font-Oswald',
              'bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#AB93E4] bg-clip-text text-transparent'
            )}
          >
            Get started now and join the journey to claim your rewards!
          </div>
        </TransformEffect>
        <TransformEffect data={{ y: 60 }}>
          <button
            className={cn(
              'font-Oswald text-[16px] font-semibold text-[#F9F7FF]',
              'flex h-[44px] w-[150px] items-center justify-center rounded-md bg-[radial-gradient(394.53%_143.73%_at_0%_0%,#8558DD_0.53%,#4A28C8_100%)]'
            )}
            onClick={handleLearnMore}
          >
            Learn More
            <Image src={arrow_r} alt='' className='w-[15px] ml-[5px]'></Image>
          </button>
        </TransformEffect>
      </div>
    </div>
  );
}
