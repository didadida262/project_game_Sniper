/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import scroll_up from '@/assets/images/treasure/scroll_up.png';

import { ERoutePaths } from './TreasureMap';

interface IBreadCrumbsProps {
  className?: string;
  appId?: number;
  missionId?: number;
  leaderboard?: boolean;
  pooldetail: any;
}
export function BreadCrumbsLootBox(props: IBreadCrumbsProps) {
  const { className, appId, missionId, leaderboard, pooldetail } = props;
  return (
    <ul
      className={cn(
        'font-Poppins text-sm font-medium text-[#79718b]',
        'hidden md:flex items-center gap-x-2 px-[58px] mb-[30px]',
        className
      )}
    >
      <Link href={ERoutePaths.QUEST} className='!flex items-center gap-x-[6px]'>
        <Image src={scroll_up} alt='home' className='w-[14px] opacity-50' />
        <span>QUEST</span>
      </Link>
      <Image src={scroll_up} alt='split' className='w-[14px] opacity-50' />
      <Link href={`${ERoutePaths.LOOTBOX}`}>Treasure</Link>
      {pooldetail && pooldetail.name ? (
        <Image src={scroll_up} alt='split' />
      ) : (
        <></>
      )}
      {pooldetail && pooldetail.name && (
        <Image src={scroll_up} alt='split' className='w-[14px] opacity-50' />
      )}
      {pooldetail && pooldetail.name && (
        <Link className='cursor-auto text-[#e4dcfa]' href=''>
          {pooldetail.name}
        </Link>
      )}
    </ul>
  );
}
