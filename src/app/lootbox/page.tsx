'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import Faq from '@/components/treasure/faq';
// import PoolCard from "@/components/lootbox/PoolCard";
import SectionOne from '@/components/treasure/SectionOne';
import { SectionTwo } from '@/components/treasure/SectionTwo';

export default function testpage() {
  const [pooldetail, setpooldetail] = useState({
    id: 1,
    name: 'test',
    tickets: [],
    rewards: [],
    participants: undefined,
    startAt: undefined,
    expireAt: 1737819000,
  });
  return (
    <div className='relative min-h-screen font-Oswald w-full bg-[#0f0713] text-[#FFFFFF] '>
      <SectionOne pooldetail={pooldetail} />
      <SectionTwo pooldetail={pooldetail} poolId=''></SectionTwo>
      <Faq />
      {/* <PoolCard /> */}
    </div>
  );
}
