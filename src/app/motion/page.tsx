import { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import {
  TransformEffect,
  TransformProperties,
} from '@/components/common/TransformEffect';

import abilityBgImg from '@/assets/images/home/key/ability_bg.png';
import abilityLogoImg from '@/assets/images/home/key/ability_logo.svg';
import aiBgImg from '@/assets/images/home/key/ai_bg.png';
import aiLogoImg from '@/assets/images/home/key/ai_logo.svg';
import connectingBgImg from '@/assets/images/home/key/connecting_bg.png';
import connectingLogoImg from '@/assets/images/home/key/connecting_logo.svg';
import immersiveBgImg from '@/assets/images/home/key/immersive_bg.png';
import immersiveLogoImg from '@/assets/images/home/key/immersive_logo.svg';

interface ICard {
  title: string;
  desc: string;
  icon: StaticImageData;
  bg: StaticImageData;
  animation: TransformProperties;
}
const cards: ICard[] = [
  {
    title: 'Ability Plugins, Knowledge, and AI Personality',
    desc: 'Customize your agents with specialized plugins, allowing them to access global data feeds and learn independently. Watch as their personalities evolve based on real-world interactions and inputs.',
    icon: abilityLogoImg,
    bg: abilityBgImg,
    animation: {
      x: 60,
      y: 40,
    },
  },
  {
    title: 'Connecting to Agents, Humans, and the Real World',
    desc: 'The WORLD AI Protocol facilitates seamless communication, enabling agents to interact with other agents, human users, and even external real-world data sources.',
    icon: connectingLogoImg,
    bg: connectingBgImg,
    animation: {
      x: -60,
      y: 40,
    },
  },
  {
    title: 'Immersive 3D World',
    desc: 'WORLD3 provides a 3D visualization layer where agents and users can interact, explore, and co-create. Enjoy an immersive experience that supports complex interactions with AI agents and other world elements.',
    icon: immersiveLogoImg,
    bg: immersiveBgImg,
    animation: {
      x: 40,
      y: -40,
    },
  },
  {
    title: 'AI Craft and Economy',
    desc: 'AI agents in WORLD3 can complete complex tasks, run social media accounts, trade, and create on-chain assets. Both users and agents can earn Lumens and $W3C tokens for their efforts.',
    icon: aiLogoImg,
    bg: aiBgImg,
    animation: {
      x: -40,
      y: -40,
    },
  },
];

export default function Motion() {
  return (
    <div className='container page-layout'>
      <div className='markBorderR grid grid-cols-1 gap-6 md:grid-cols-12'>
        {cards.map((item, index) => {
          const isOdd = index % 2 === 1;
          return (
            <TransformEffect
              key={index}
              className={
                index === 0
                  ? 'md:col-span-7'
                  : index === 1
                  ? 'md:col-span-5'
                  : 'md:col-span-6'
              }
              data={item.animation}
            >
              <div className='cards relative rounded-md border border-neutral-800 bg-black p-10 dark:border-neutral-800'>
                <div
                  className={cn(
                    'relative flex gap-4 max-md:!items-center',
                    isOdd ? 'flex-row items-center' : 'md:flex-col'
                  )}
                >
                  <div className='flex h-8 w-8 items-center justify-center rounded bg-[#1d1f23] sm:h-12 sm:w-12 sm:rounded-[7px]'>
                    {/* <Image
                      src={item.icon}
                      alt=""
                      className="h-[24px] sm:h-[33px]"
                    /> */}
                  </div>
                  <h3 className='max-w-[358px] flex-1 text-lg font-bold leading-normal md:text-2xl'>
                    {item.title}
                  </h3>
                </div>
              </div>
            </TransformEffect>
          );
        })}
      </div>
    </div>
  );
}
