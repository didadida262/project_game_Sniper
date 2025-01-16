/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import lootbox_card from '@/assets/images/lootbox/lootbox_card.png';
import lootbox_card_lumens from '@/assets/images/lootbox/lootbox_card_lumens.png';
import lootbox_card_none from '@/assets/images/lootbox/lootbox_card_none.png';
import lootbox_card_usdt from '@/assets/images/lootbox/lootbox_card_usdt.png';
import suibtn_logo from '@/assets/images/lootbox/sui_btn_logo.png';
import treasureBox_btn_logo2 from '@/assets/images/lootbox/treasureBox_btn_logo2.png';

export default function PoolCard() {
  const [flipped, setFlipped] = useState(false);
  const [CardsList, setCardsList] = useState([]) as any;
  const [tickets, settickets] = useState([
    {
      name: 'Sui Tickets',
      count: 10,
      src: treasureBox_btn_logo2,
      chain: 'SUI',
    },
  ]);
  const handleMockData = () => {
    const mockData = [
      {
        type: 'LUMENS',
        amount: 6,
      },
      {
        type: 'LUMENS',
        amount: 6,
      },
      {
        type: '',
        amount: 36,
      },
      {
        type: '',
        amount: 35,
      },
      {
        type: 'LUMENS',
        amount: 6,
      },
      {
        type: 'LUMENS',
        amount: 6,
      },
      {
        type: 'USDT',
        amount: 25,
      },
      {
        type: '',
        amount: 50,
      },
      {
        type: 'USDT',
        amount: 22,
      },
      {
        type: 'USDT',
        amount: 40,
      },
    ];
    const resultData = mockData.slice(0, CardsList.length).map((item: any) => {
      return {
        ...item,
        img:
          item.type === 'LUMENS'
            ? lootbox_card_lumens
            : item.type === 'USDT'
            ? lootbox_card_usdt
            : lootbox_card_none,
      };
    });
    setCardsList(resultData);
    setFlipped(!flipped);
  };
  const initCardList = () => {
    const count = tickets[0].count;
    const CardsData = Array(count > 10 ? 10 : count)
      .fill(null)
      .map((_, index) => {
        return {
          amount: 0, // val 属性,
          img: lootbox_card,
        };
      });
    setCardsList(CardsData);
  };

  useEffect(() => {
    initCardList();
  }, []);

  return (
    <div
      className='relative  bg-cover bg-center bg-no-repeat py-8 font-Oswald '
      style={{}}
    >
      {tickets[0].count === 0 && (
        <div className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[#14131CB2]'>
          <div className='flex h-[80px] w-[280px] items-center justify-center rounded-[12px] bg-[#FF7900]'>
            <Image
              src={treasureBox_btn_logo2}
              alt=''
              className='mr-[8px] aspect-[1] w-[40px]'
            ></Image>
            <span className='text-[26px] font-normal'>Get Tickets</span>
          </div>
        </div>
      )}

      <div className='mx-auto  w-full xl:w-[1093px]  relative'>
        <div className='  relative mx-auto flex w-full  items-center justify-center'>
          <span className='font-Oswald text-[43px] font-semibold'>
            Have a Lucky Draw
          </span>
        </div>
        <div className=' relative px-4 py-8 font-Oswald'>
          <div
            className={cn(
              ' mx-auto mb-[60px] flex max-w-[1092px] flex-wrap gap-x-3 gap-y-[10px] bg-[#19133A4D] px-[20px] py-[30px] md:gap-x-6 md:gap-y-10 md:rounded-[16px] md:px-[40px] md:py-[40px]',
              'justify-around'
            )}
          >
            {CardsList.map((item: any, index: number) => (
              <div
                key={index}
                className={cn(
                  `relative transform duration-500`,
                  'hover:cursor-pointer',
                  'hover:scale-110'
                )}
              >
                <Image
                  src={lootbox_card}
                  alt=''
                  className={cn(
                    'aspect-[0.69]  w-[80px] md:w-[172px] select-none duration-1000',
                    `transition-transform ${
                      flipped ? 'rotate-y-180' : 'rotate-y-0'
                    }`
                  )}
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                />
                <div
                  className={cn(
                    'absolute left-0 top-0 aspect-[0.69] w-[80px] md:w-[172px] select-none duration-1000',
                    `transition-transform ${
                      flipped ? 'rotate-y-0' : 'rotate-y-180'
                    }`
                  )}
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <Image
                    src={item.img}
                    alt=''
                    className='aspect-[0.69] w-[80px] select-none duration-1000 md:w-[172px]'
                  />
                  {item.type && (
                    <div
                      className={cn(
                        'absolute bottom-[14px] left-0 flex w-full flex-col items-center md:bottom-[30px]'
                      )}
                    >
                      <span className='text-[14px] md:text-[26px] font-semibold leading-[14px] md:leading-[36px]'>
                        {item.amount}
                      </span>
                      <span className='text-[10px] md:text-[24px] font-semibold leading-[12px] md:leading-[28px]'>
                        {item.type}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='btn w-full flex flex-col items-center'>
            <div
              className={cn(
                'justify-center mx-auto w-[280px] h-[80px] btn  flex items-center rounded-[3px]',
                'hover:cursor-pointer ',
                'bg-cover bg-center bg-no-repeat'
              )}
              style={{
                backgroundImage: 'url(/assets/treasure/sui_btn_bg.png)',
              }}
            >
              <Image
                src={suibtn_logo}
                className='w-[46px] aspect-[1]'
                alt='sui'
              ></Image>
              <span className='text-[#E1B938] text-[26px] ml-[8px]'>
                Sui Tickets X {tickets[0].count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
