import logo_lumens from '@/assets/images/treasure/logo_lumens.png';
import logo_lumens40 from '@/assets/images/treasure/logo_lumens40.png';
import logo_usdc from '@/assets/images/treasure/logo_usdc.png';
import logo_user from '@/assets/images/treasure/logo_user.png';
import logo_user2 from '@/assets/images/treasure/logo_user2.png';
import logo_user3 from '@/assets/images/treasure/logo_user3.png';

export const poolTasks = [
  {
    id: 0,
    name: 'Follow @WORLD3 on X',
    unit: 'Lumens',
    val: 30,
    link: '',
    img: logo_lumens40,
  },
  {
    id: 1,
    name: 'join the WORLD3 on Telegram',
    unit: 'Lumens',
    val: 30,
    link: '',
    img: logo_lumens40,
  },
  {
    id: 2,

    name: 'join the WORLD3 Discord',
    unit: 'Lumens',
    val: 30,
    link: '',
    img: logo_lumens40,
  },
  {
    id: 3,

    name: 'Connect your Sui Network Chain address.',
    unit: 'Lumens',
    val: 30,
    link: '',
    img: logo_lumens40,
  },
  {
    id: 4,

    name: 'retweet the tweet',
    unit: 'Lumens',
    val: 30,
    link: '',
    img: logo_lumens40,
  },
];

export const getDeadLineData = (pooldetail: any) => {
  if (!pooldetail.expireAt) return;
  const expireDate = pooldetail.expireAt * 1000;
  const now = new Date();
  const timeDiff = expireDate - now.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const progressTime = [
    {
      name: 'DAYS',
      val: String(days).padStart(2, '0'),
    },
    {
      name: 'HOURS',
      val: String(hours).padStart(2, '0'),
    },
    {
      name: 'MINUTES',
      val: String(minutes).padStart(2, '0'),
    },
    {
      name: 'SECONDS',
      val: String(seconds).padStart(2, '0'),
    },
  ];
  return progressTime;
};
export const btns = [
  {
    text: 'Participate',
    link: 'asdasd',
  },
  {
    text: 'Learn How to Play',
    link: 'https://docs.world3.ai/world3/how-to-guides/referral-program-guide',
  },
];

export const FAQsList = [
  {
    question: 'What is the Staking System?',
    answer: [
      `The Staking System is a feature within the WORLD3 ecosystem that allows users to earn rewards by staking their assets, such as Matrix Land, without losing ownership or incurring gas fees. It supports multiple blockchain assets and provides opportunities for users to participate in corresponding staking missions.`,
    ],
  },
  {
    question: 'How do I benefit from staking?',
    answer: [
      `You can benefit from staking your assets and earning Proof of Staking Point (PSP) for that. Proof of Staking Point (PSP) is a reward specially for the staking system. PSP will be converted into WORLD3’s on-chain token $W3C in proportion and and will be airdropped to users in the future. The longer you choose to stake, the bigger your reward will be.`,
    ],
  },
  {
    question: 'Can I unstake my assets when I am staking?',
    answer: [
      'Yes, you can unstake your assets at any time, but once unstaking you will no longer receive rewards.',
    ],
  },
  {
    question: 'Will I lose ownership of my assets while staking?',
    answer: [
      'No, you retain full ownership of your assets during staking. The Staking System is designed to ensure that you can earn rewards without transferring asset ownership.',
    ],
  },
];
export enum ERoutePaths {
  'AIRDROP' = '/airdrop',
  'HOME' = '/',
  'DOCUMENT' = '/',
  'SCREENSHOT' = '/screenshot',

  'QUEST' = '/quest',
  'LEADERBOARD_LUMENS' = '/quest/leaderboard/lumens',
  'STAKING_ENTRY' = '/quest/staking',
  'STAKING_LAND' = '/quest/staking/land',

  'SOUL' = '/souldragons',
  'VERIFY_WHITELIST' = '/souldragons/verifywhitelist',
  'ORIGIN' = '/souldragons/origin',
  'EGGS' = '/souldragons/eggs',
  'MINT' = '/souldragons/mint',
  'SOUL_ABOUT' = '/souldragons/about',
  'SOUL_TRADE' = '/souldragons/trade',
  'SOUL_SHARE' = '/souldragons/share',

  'CAVE' = '/crystalcaves',
  'CAVE_GAME' = '/crystalcaves/cave',
  'CAVE_DOCS' = '/crystalcaves/docs',

  'AI_AGENT' = '/agent',
  'LOOTBOX' = '/lootbox',

  'REFERRAL' = '/referral',
}

export const mockRoundListData = [
  {
    name: 'Round 1',
  },
  {
    name: 'Round 2',
  },
  {
    name: 'Round 3',
  },
  {
    name: 'Round 4',
  },
  {
    name: 'Round 5',
  },
  {
    name: 'Round 6',
  },
];

export const mockWinningData = [
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user3,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user3,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user3,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user3,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user3,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user2,
  },
  {
    name: '0x7141517780842870e74c44cb20599aa8c2157424ab4bbe490aebe35dbdade9b9',
    avatar: logo_user2,
  },
];

export const mockRewardData = [
  {
    type: 'Lumens',
    val: 1000000,
    unit: 'Total',
    img: logo_lumens,
    color: '#7251F7',
  },
  {
    type: 'USDC',
    val: 1000,
    unit: 'Week',
    img: logo_usdc,
    color: '#2F97EB',
  },
];
