'use client';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { TransformEffect } from '@/components/common/TransformEffect';
import { CardBody, CardContainer, CardItem } from '@/components/ThreeDCard';

import arrowv2 from '@/assets/images/airdrop/arrowv2.png';
import share from '@/assets/images/airdrop/share.png';
import third_pic1 from '@/assets/images/airdrop/third_pic1.png';
import third_pic2 from '@/assets/images/airdrop/third_pic2.png';
import third_pic3 from '@/assets/images/airdrop/third_pic3.png';

export default function SectionThird() {
  return (
    <div className='font-Oswald w-[1081px] mx-auto pb-[120px]'>
      <TransformEffect data={{ y: 60 }}>
        <div
          className={cn(
            'font-medium w-full h-[65px] flex justify-center items-center',
            'leading-[65px] text-[44px]'
          )}
        >
          How to paticipate
        </div>
        <div className='mt-[56px] flex justify-between items-center'>
          <CardContainer>
            <CardBody className='group/card relative aspect-[1.529] w-full max-w-[560px]'>
              <CardItem translateZ='50'>
                <Image
                  src={third_pic1}
                  alt=''
                  className={cn('w-[188px] ')}
                ></Image>
              </CardItem>
            </CardBody>
          </CardContainer>

          <Image src={arrowv2} alt='' className='w-[36px]'></Image>
          <CardContainer>
            <CardBody className='group/card relative aspect-[1.529] w-full max-w-[560px]'>
              {/* <CardItem translateZ="50"> */}
              <div className={cn('hover:scale-105', 'duration-200 relative')}>
                <Image src={third_pic2} alt='' className='w-[414px]' />
                <div
                  className={cn(
                    'w-[114px] aspect-[3.56] rounded-[6px] px-[11px] flex items-center justify-between',
                    'border-solid border-[1px] bg-[#7E5AD71A] border-[#6938DF66]',
                    'absolute top-[50px] left-[35px]',
                    'hover:bg-[#7E5AD74D] hover:cursor-pointer'
                  )}
                >
                  <span className='text-[16px] font-Oswald'>Crystal cave</span>
                  <Image src={share} alt='' className='w-[12px]'></Image>
                </div>

                <div
                  className={cn(
                    'w-[114px] aspect-[3.56] rounded-[6px] px-[11px] flex items-center justify-between',
                    'border-solid border-[1px] bg-[#7E5AD71A] border-[#6938DF66]',
                    'absolute top-[88px] left-[35px]',
                    'hover:bg-[#7E5AD74D] hover:cursor-pointer'
                  )}
                >
                  <span className='text-[16px] font-Oswald'>Quest</span>
                  <Image src={share} alt='' className='w-[12px]'></Image>
                </div>
                <div
                  className={cn(
                    'w-[114px] aspect-[3.56] rounded-[6px] px-[11px] flex items-center justify-between',
                    'border-solid border-[1px] bg-[#7E5AD71A] border-[#6938DF66]',
                    'absolute top-[126px] left-[35px]',
                    'hover:bg-[#7E5AD74D] hover:cursor-pointer'
                  )}
                >
                  <span className='text-[16px] font-Oswald'>Treasure</span>
                  <Image src={share} alt='' className='w-[12px]'></Image>
                </div>
                <div
                  className={cn(
                    'w-[114px] aspect-[3.56] rounded-[6px] px-[11px] flex items-center justify-between',
                    'border-solid border-[1px] bg-[#7E5AD71A] border-[#6938DF66]',
                    'absolute top-[165px] left-[35px]',
                    'hover:bg-[#7E5AD74D] hover:cursor-pointer'
                  )}
                >
                  <span className='text-[16px] font-Oswald'>Referral</span>
                  <Image src={share} alt='' className='w-[12px]'></Image>
                </div>
                <div
                  className={cn(
                    'w-[114px] aspect-[3.56] rounded-[6px] px-[11px] flex items-center justify-between',
                    'border-solid border-[1px] bg-[#7E5AD71A] border-[#6938DF66]',
                    'absolute bottom-[20px] left-[35px]',
                    'hover:bg-[#7E5AD74D] hover:cursor-pointer'
                  )}
                >
                  <span className='text-[16px] font-Oswald'>Staking</span>
                  <Image src={share} alt='' className='w-[12px]'></Image>
                </div>
              </div>
              {/* </CardItem> */}
            </CardBody>
          </CardContainer>
          <Image src={arrowv2} alt='' className='w-[36px]'></Image>
          <CardContainer>
            <CardBody className='group/card relative aspect-[1.529] w-full max-w-[560px]'>
              <CardItem translateZ='50'>
                <Image src={third_pic3} alt='' className='w-[188px]'></Image>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </TransformEffect>
    </div>
  );
}
