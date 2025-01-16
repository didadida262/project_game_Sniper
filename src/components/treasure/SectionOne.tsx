/* eslint-disable @typescript-eslint/ban-types */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import arrow_r from '@/assets/images/treasure/arrow_r.png';
import dash_logo from '@/assets/images/treasure/dash_logo.png';
import logo_crown from '@/assets/images/treasure/logo_crown.png';
import scroll_down from '@/assets/images/treasure/scroll_down.png';
import scroll_up from '@/assets/images/treasure/scroll_up.png';

import { BreadCrumbsLootBox } from './BreadCrumbs';
import TimerClockV2 from './TimerClockV2';
import {
  btns,
  getDeadLineData,
  mockRewardData,
  mockRoundListData,
  mockWinningData,
} from './TreasureMap';

interface IProps {
  pooldetail: any;
}
const scrollDistance = 90;

export default function SectionOne(props: IProps) {
  const { pooldetail } = props;
  const [scrollIndex, setscrollIndex] = useState(0);
  const [roundList, setroundList] = useState() as any;
  const [rewards, setrewards] = useState() as any;
  const [winningList, setWinningList] = useState() as any;
  const [allWinningList, setallWinningList] = useState([]) as any;
  const [activeRound, setactiveRound] = useState({}) as any;
  const [time, settime] = useState([]) as any;
  const handleClickBtn = (item: any) => {
    window.open(item.link, '_blank');
  };
  const getRoundListData = async () => {
    const data = await new Promise((resolve, reject) => {
      const mockData = [...mockRoundListData];
      resolve(mockData);
    });
    setroundList(data);
  };
  const getWinningList = async () => {
    const data = (await new Promise((resolve, reject) => {
      resolve([...mockWinningData]);
    })) as Array<any>;
    setallWinningList(data);
    const showData = data.slice(scrollIndex * 5, scrollIndex * 5 + 5);
    setWinningList(showData);
  };
  const getName = (name: any) => {
    return name.slice(0, 4) + '...' + name.slice(-6);
  };
  const handlePage = (direction: any) => {
    if (direction === 'up') {
      setscrollIndex(scrollIndex - 1);
    } else {
      setscrollIndex(scrollIndex + 1);
    }
  };
  const getRewardsData = async () => {
    const data = await new Promise((resolve, reject) => {
      resolve(mockRewardData);
    });
    setrewards(data);
  };

  useEffect(() => {
    getRoundListData();
    getRewardsData();
  }, []);
  useEffect(() => {
    if (roundList && roundList.length) {
      setactiveRound(roundList[0]);
    }
  }, [roundList]);
  useEffect(() => {
    getWinningList();
  }, [scrollIndex]);
  useEffect(() => {
    setscrollIndex(0);
  }, [activeRound]);

  useEffect(() => {
    if (!pooldetail.id) return;
    const timer = setInterval(() => {
      const res = getDeadLineData(pooldetail);
      settime(res);
    }, 500);
    return () => {
      timer && clearInterval(timer);
    };
  }, [pooldetail]);
  return (
    <div
      className={cn(
        ' pt-10 h-[727px] md:px-0 px-2 ',
        'font-Oswald text-[#FFFFFF]',
        'bg-cover bg-center bg-no-repeat'
      )}
      style={{
        backgroundImage: 'url(./assets/treasure/treasure_sectionone_bg.png)',
      }}
    >
      {/* 面包导航 */}
      <BreadCrumbsLootBox pooldetail={pooldetail} />
      {/* title */}
      <div className='mb-[20px] h-[59px] text-center'>
        <span className='text-[35px] md:text-[48px] font-medium leading-[60px]  bg-gradient-to-b from-gray-300 from-[38.81%] to-[#7F5AD6] to-[134.33%] text-transparent bg-clip-text'>
          WORLD3 Treasure
        </span>
      </div>
      {/* card */}
      <div
        className={cn(
          'w-full md:w-[705px] md:h-[350px] mx-auto py-[24px] rounded-[18.8px]',
          'flex flex-col items-center',
          'bg-[#111423] bg-cover bg-center bg-no-repeat',
          'border-[1px] border-b-[4px] border-solid border-[#2c3148]',
          'mb-[22px] md:px-0 px-2'
        )}
        style={{
          backgroundImage: 'url(./assets/treasure/treasure_sectionone_bg2.png)',
        }}
      >
        <span
          className={cn(
            'mb-[8px]',
            'font-Oswald font-medium text-[22px] leading-[32.6px] text-[#FFFFFF]'
          )}
        >
          Discover Hidden Rewards
        </span>
        <span
          className={cn(
            'w-full md:w-[538px] aspect-[10.76] mb-[8px]',
            'text-[10px] md:text-[14px] leading-[12px] md:leading-[21px] text-[#B3B3C0] text-center font-Poppins'
          )}
        >
          Collect tickets, join raffles, and unlock loot boxes brimming with
          valuable treasures. Take on exciting challenges to earn Lumens and
          other rewards！
        </span>
        {/* timer */}
        <div
          className={cn(
            'w-full md:w-[436px] h-[100px] rounded-[8.4px] md:px-[17px] md:py-[17px] px-2  mb-[10px]',
            'flex justify-start items-center',
            'bg-[#1F223287]',
            'border-[1px] border-solid border-[#353B4E]'
          )}
        >
          <span
            className={cn(
              'text-[16px] leading-[23.7px] text-[#FFFFFF] text-center font-medium'
            )}
          >
            Round1
          </span>
          <div className={cn('ml-[22px]')}>
            <TimerClockV2 data={time} type='colon' />
          </div>
        </div>
        <div
          className={cn(
            'w-full md:w-[436px] aspect-[10.9] mb-[9px]',
            'flex items-center',
            'bg-[#181C2B] rounded-[8px] px-[16px]'
          )}
        >
          <div className='text-[13px] font-medium'>Rewards:</div>
          {rewards && rewards.length && (
            <div
              className={cn(
                'ml-[17px]',
                'flex justify-between items-center flex-1'
              )}
            >
              {[rewards[0]].map((reward: any, index) => (
                <div
                  key={index}
                  className={cn(
                    'w-[calc(44%)] md:w-[163px] aspect-[6.27]',
                    'flex items-center'
                  )}
                >
                  <Image
                    src={reward.img}
                    alt=''
                    className='w-[26px] aspect-[1] mr-[8px]'
                  ></Image>
                  <span
                    className={cn('text-[7px] md:text-[12px] font-medium')}
                    style={{ color: reward.color }}
                  >
                    {reward.val.toLocaleString() +
                      ' ' +
                      reward.type +
                      ' / ' +
                      reward.unit}
                  </span>
                </div>
              ))}
              <Image src={dash_logo} alt='' className='h-[26px]'></Image>
              {[rewards[1]].map((reward: any, index) => (
                <div
                  key={index}
                  className={cn(
                    'w-[calc(44%)] md:w-[132px] aspect-[5.1]',
                    'flex items-center'
                  )}
                >
                  <Image
                    src={reward.img}
                    alt=''
                    className='w-[26px] aspect-[1] mr-[8px]'
                  ></Image>
                  <span
                    className={cn('text-[7px] md:text-[12px] font-medium')}
                    style={{ color: reward.color }}
                  >
                    {reward.val.toLocaleString() +
                      ' ' +
                      reward.type +
                      ' / ' +
                      reward.unit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={cn(
            'w-full md:w-[424px] aspect-[8.8]',
            'flex justify-between items-center'
          )}
        >
          {btns.map((btn: any, index: number) => (
            <button
              className={cn(
                'aspect-[4.17] w-[150px] md:w-[200px]',
                'text-[15px] md:text-[20px] font-semibold ',
                'flex items-center justify-center rounded-[4px] md:rounded-[8px]',
                index === 0
                  ? 'bg-[linear-gradient(90deg,#7E5AD6_15.2%,#6430E2_117.5%)] text-[#FFFFFF]'
                  : 'bg-[#4C465B] text-[#CAC9D1]',
                btn.link ? '' : 'grayscale filter hover:cursor-not-allowed'
              )}
              key={index}
              onClick={() => {
                if (!btn.link) return;
                handleClickBtn(btn);
              }}
            >
              {btn.text}
              {index === 0 && btn.link && (
                <Image
                  src={arrow_r}
                  alt=''
                  className='ml-[5px] w-[15px]'
                ></Image>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* winninglist */}
      <div
        className={cn(
          'w-full md:w-[705px] aspect-[4.7] mx-auto px-2 py-2 md:py-[8px] md:px-[19px] rounded-[18.8px]',
          'flex items-center justify-between',
          'bg-[#111423] bg-cover bg-center bg-no-repeat',
          'border-[1px] border-b-[4px] border-solid border-[#2c3148]'
        )}
      >
        <div
          className={cn(
            'w-[82px] aspect-[0.85] overflow-y-scroll',
            'flex flex-col gap-y-[11px]'
          )}
        >
          {roundList &&
            activeRound &&
            roundList.length &&
            roundList.map((round: any, index: number) => (
              <div
                key={index}
                className={cn(
                  'w-full h-[25px] rounded-[4px]',
                  'text-[14px] font-medium',
                  'flex justify-center items-center',
                  'hover: cursor-pointer',
                  activeRound.name === round.name
                    ? 'bg-[#25283A] text-[#FF7900]'
                    : 'bg-[#111423] text-[#797D8D]'
                )}
                onClick={() => {
                  setactiveRound(round);
                }}
              >
                {round.name}
              </div>
            ))}
        </div>
        <div
          className={cn(
            'w-[calc(100%_-_184px)]',
            'flex flex-col items-center gap-y-[8px] md:gap-y-[0px]'
          )}
        >
          <span className='font-medium text-[14px] md:text-[16px]'>
            Winning List
          </span>
          <div
            className={cn(
              'w-full h-[90px]',
              'flex items-center justify-start gap-x-[14.5px] md:gap-x-[34.5px] overflow-y-scroll flex-wrap'
            )}
          >
            {winningList &&
              winningList.map((winner: any, index: number) => (
                <div
                  key={index}
                  className={cn(
                    'h-[100px] pt-[10px] pl-[5px]',
                    'flex flex-col justify-around items-center relative'
                  )}
                >
                  <Image
                    src={logo_crown}
                    alt=''
                    className='w-[32px] absolute top-[-4px] left-[-3px]'
                  ></Image>
                  <Image
                    src={winner.avatar}
                    alt=''
                    className='w-[30px] md:w-[48px] aspect-[1]'
                  ></Image>
                  <span className='text-[8px] md:text-[12px] font-medium'>
                    {getName(winner.name)}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div
          className={cn(
            'w-[20px] pt-[10px] md:pt-[30px] ',
            'flex flex-col justify-between items-center'
          )}
        >
          <Image
            src={scroll_up}
            alt=''
            className={cn(
              'w-[16px] md:w-[20px] aspect-[1]  mb-[10px] md:mb-[21px]',
              scrollIndex === 0
                ? 'hover:cursor-not-allowed'
                : 'hover:cursor-pointer'
            )}
            onClick={() => scrollIndex !== 0 && handlePage('up')}
          ></Image>
          <Image
            src={scroll_down}
            alt=''
            className={cn(
              'w-[16px] md:w-[20px] aspect-[1] hover:cursor-pointer',
              scrollIndex === allWinningList.length % 5
                ? 'hover:cursor-not-allowed'
                : 'hover:cursor-pointer'
            )}
            onClick={() =>
              scrollIndex !== allWinningList.length % 5 && handlePage('down')
            }
          ></Image>
        </div>
      </div>
    </div>
  );
}
