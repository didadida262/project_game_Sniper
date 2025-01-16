/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import lootbox_card from '@/assets/images/treasure/lootbox_card.png';
import lootbox_card_lumens from '@/assets/images/treasure/lootbox_card_lumens.png';
import lootbox_card_none from '@/assets/images/treasure/lootbox_card_none.png';
import lootbox_card_points from '@/assets/images/treasure/lootbox_card_points.png';
import lootbox_card_usdt from '@/assets/images/treasure/lootbox_card_usdt.png';
import lootbox_detail_second_bg from '@/assets/images/treasure/lootbox_detail_second_bg.png';
import lootbox_detail_second_bg_mobile from '@/assets/images/treasure/lootbox_detail_second_bg_mobile.png';
import rewards_logoV2 from '@/assets/images/treasure/rewards_logoV2.png';
import suibtn_logo from '@/assets/images/treasure/sui_btn_logo.png';
import treasureBox_btn_logo2 from '@/assets/images/treasure/treasureBox_btn_logo2.png';

interface IProps {
  poolId: string;
  pooldetail: any;
}
function hexToBase64(hex: string): string {
  // 将十六进制字符串转换为字节数组
  const buffer = Buffer.from(hex, 'hex');
  // 将字节数组转换为 Base64 编码
  return buffer.toString('base64');
}
export function SectionTwo(props: IProps) {
  const { poolId, pooldetail } = props;
  const [rewardslogopen, setrewardslogopen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [CardsList, setCardsList] = useState([]) as any;
  const [status, setStatus] = useState(0);
  const router = useRouter();

  const [tickets, settickets] = useState([
    {
      name: 'WORLD3 Treasure Tickets',
      count: 10,
      src: suibtn_logo,
      chain: 'SUI',
    },
  ]);

  const updateCardList = () => {
    const suiTicket = tickets.filter((ticket) => ticket.chain === 'SUI')[0];
    if (!suiTicket) return;
    const count = suiTicket.count;
    const CardsData = Array(count > 10 ? 10 : count === 0 ? 10 : count)
      .fill(null)
      .map((_, index) => {
        return {
          amount: 0, // val 属性,
          img: lootbox_card,
        };
      });
    setCardsList(CardsData);
    setFlipped(false);
  };
  const updateTicketsMock = () => {
    const newTickets = {
      name: 'WORLD3 Treasure Tickets',
      count: tickets[0].count - 1,
      src: rewards_logoV2,
      chain: 'SUI',
    };
    settickets([newTickets]);
  };
  const handleClickTicketV2Mock = () => {
    const arrType = ['NONE', 'USDT', 'LUMENS', 'POINTS'];
    const resultData = Array(tickets[0].count)
      .fill(null)
      .map((_, index) => {
        const randomType = arrType[Math.floor(Math.random() * arrType.length)];
        return {
          type: randomType,
          amount: Math.floor(Math.random() * 100),
          img:
            randomType === 'LUMENS'
              ? lootbox_card_lumens
              : randomType === 'USDT'
              ? lootbox_card_usdt
              : randomType === 'POINTS'
              ? lootbox_card_points
              : lootbox_card_none,
        };
      });
    setCardsList(resultData);
    setFlipped(true);
  };

  useEffect(() => {
    // 根据当前sui的ticket的数量，生成对应个数的覆盖状态卡片
    updateCardList();
  }, [tickets]);

  useEffect(() => {
    // TODO
    void updateTicketsMock();
  }, [pooldetail]);
  return (
    <div
      className='relative  bg-cover bg-center bg-no-repeat py-8 font-Oswald'
      style={
        {
          // backgroundImage: "url(./lootboxdetailSecond_bg.png)"
        }
      }
    >
      <div className='relative mx-auto w-full px-4 xl:w-[1093px]'>
        {/* light_bg_pc */}
        <Image
          src={lootbox_detail_second_bg}
          alt=''
          className=' absolute right-[-325px] top-[-240px] hidden aspect-[1.35] w-[650px] md:block'
        ></Image>
        {/* light_bg_mobile */}

        <Image
          src={lootbox_detail_second_bg_mobile}
          alt=''
          className=' absolute right-[-175px] top-[-120px] aspect-[1.35] w-[350px] md:hidden'
        ></Image>

        <div className='relative mx-auto flex w-full  items-center justify-center mb-[50px]'>
          <span className='font-Oswald text-[20px] font-semibold md:text-[43px]'>
            Have a Lucky Draw
          </span>
          <div
            className='absolute right-0 top-0 flex cursor-pointer items-center justify-between'
            onClick={() => setrewardslogopen(true)}
          >
            <Image
              src={rewards_logoV2}
              alt=''
              className='h-[43px] w-[48px] md:mr-[8px] md:h-[68px] md:w-[75px]'
            ></Image>
          </div>
        </div>
        <div className='relative py-8 font-Oswald'>
          <div
            className={cn(
              'relative mx-auto mb-[10px] flex max-w-[1092px] flex-wrap gap-x-3 gap-y-[10px] rounded-[10px]  bg-[#19133A4D] py-[30px] md:mb-[60px] md:gap-x-6 md:gap-y-10 md:rounded-[16px] md:px-[40px] md:py-[40px]',
              'justify-around'
            )}
          >
            {/* todo */}
            {tickets[0].count === 0 && (
              <div className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[#14131CB2]'>
                <div
                  className='flex h-[80px] w-[280px] items-center justify-center rounded-[12px] bg-[#FF7900] hover:cursor-pointer'
                  onClick={() => {
                    // TODO 跳转
                  }}
                >
                  <Image
                    src={treasureBox_btn_logo2}
                    alt=''
                    className='mr-[8px] aspect-[1] w-[40px]'
                  ></Image>

                  <span className='text-[26px] font-normal'>Get Tickets</span>
                </div>
              </div>
            )}
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
                    'aspect-[0.69] w-[80px] select-none duration-1000 md:w-[172px]',
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
                    'absolute left-0 top-0 aspect-[0.69] w-[80px] select-none duration-1000 md:w-[172px]',
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
                        'absolute bottom-[14px] left-0 flex w-full  flex-col items-center md:bottom-[30px]'
                      )}
                    >
                      <span className='text-[14px] font-semibold leading-[14px] md:text-[26px] md:leading-[36px]'>
                        {item.amount}
                      </span>
                      <span className='text-[10px] font-semibold leading-[12px] md:text-[24px] md:leading-[28px]'>
                        {item.type}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='btn flex w-full scale-[0.6] flex-col items-center rounded-[10px] md:scale-100 md:rounded-none '>
            {!flipped && (
              <div
                className={cn(
                  'mx-auto flex aspect-[5.31] w-full items-center  justify-center md:w-[425px]',
                  'hover:cursor-pointer ',
                  'bg-cover bg-center bg-no-repeat',
                  tickets[0].count === 0
                    ? 'grayscale filter hover:cursor-not-allowed'
                    : 'hover:cursor-pointer'
                )}
                style={
                  {
                    // backgroundImage: "url(/assets/treasure/sui_btn_bg.png)"
                  }
                }
                onClick={() => {
                  if (tickets[0].count === 0) return;
                  handleClickTicketV2Mock();
                }}
              >
                <Image
                  src={suibtn_logo}
                  className='aspect-[1] w-[46px]'
                  alt='sui'
                ></Image>
                <span className='ml-[8px] text-[23px] text-[#E1B938] md:text-[26px]'>
                  WORLD3 Treasure Tickets{' '}
                  <span className='text-[#FFFFFF]'>X {tickets[0].count}</span>
                </span>
              </div>
            )}
            {flipped && (
              <div
                className={cn(
                  'mx-auto flex h-[80px] w-[280px] items-center justify-center rounded-[12px] bg-[#FF7900]',
                  'hover:cursor-pointer'
                )}
                onClick={() => {
                  updateTicketsMock();
                }}
              >
                <span className='text-[26px]'>Collecting Rewards</span>
              </div>
            )}

            <span
              className='mt-[16px] font-Oswald text-[18px] text-[#FFFFFF] underline hover:cursor-pointer'
              onClick={() => {
                // TODO 跳转
              }}
            >
              Get More Tickets
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
