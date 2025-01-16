import Image from 'next/image';

import { cn } from '@/lib/utils';

import logo_lock from '@/assets/images/treasure/logo_lock.png';
import logo_sui40 from '@/assets/images/treasure/logo_sui40.png';

import { poolTasks } from '../TreasureMap';

export default function LockDialog() {
  const handleCalim = () => {
    console.log('calim rewards');
  };
  const handleComplete = (task: any) => {
    console.log('task>>>', task);
  };
  return (
    <div
      className={cn(
        'w-[600px] h-[943px]',
        'mx-auto py-[32px] px-[40px] rounded-[20px]',
        'bg-[#0E0F21]',
        'text-[rgb(255,255,255)] font-Poppins'
      )}
    >
      <div
        className={cn(
          'w-[453px]',
          'flex flex-col items-center',
          'mx-auto mb-[34.5px]'
        )}
      >
        <Image src={logo_lock} alt='' className='w-[60px] mb-[8px]'></Image>
        <span className=''>
          Complete the tasks below to Start Your Treasure Journey
        </span>
      </div>
      <div className={cn('flex flex-col gap-y-[24px]')}>
        {poolTasks.map((task: any, index: number) => (
          <div
            key={index}
            className={cn(
              'w-full h-[110px]',
              'pb-[24px]',
              'flex justify-between items-center',
              'border-dashed  border-b-[2px] border-[#363C54]'
            )}
          >
            <div className={cn()}>
              <div className={cn('flex flex-col gap-y-[12px]')}>
                <span>
                  {index !== 3 && (
                    <span>
                      Click
                      <span
                        className={cn(
                          'py-[6px] px-[12px] rounded-[6px] mx-[4px]',
                          'text-[#C39AFF]',
                          'bg-[#111423]'
                        )}
                      >
                        Here
                      </span>
                      to{' '}
                    </span>
                  )}

                  {task.name}
                </span>
                <div className={cn('flex justify-start items-center')}>
                  <Image
                    src={task.img}
                    alt=''
                    className='w-[40px] aspect-[1] mr-[6px]'
                  ></Image>
                  <span className='text-[#8B898D]'>
                    {task.unit}{' '}
                    <span
                      className={cn('text-[#9A81FF] text-[16px] font-semibold')}
                    >
                      {task.val}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={cn('h-full', 'flex justify-center items-start')}>
              <button
                className={cn(
                  'w-[112px] h-[44px]',
                  'font-Oswald font-semibold',
                  'flex justify-center items-center',
                  'rounded-[8px]',
                  'bg-[#FF7900]'
                )}
                onClick={() => {
                  handleComplete(task);
                }}
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'w-full h-[110px]',
          'pb-[24px] mt-[24px]',
          'flex justify-between items-center'
        )}
      >
        <div className={cn()}>
          <div className={cn('flex flex-col gap-y-[12px]')}>
            <span>Claim your ticket and unlock your first reward!</span>
            <div className={cn('flex justify-start items-center')}>
              <Image
                src={logo_sui40}
                alt=''
                className='w-[40px] aspect-[1] mr-[6px]'
              ></Image>
              <span className='text-[#FFCA57] font-bold'>
                WORLD3 Treasure Tickets x 2
              </span>
            </div>
          </div>
        </div>
        <div className={cn('h-full', 'flex justify-center items-start')}>
          <button
            className={cn(
              'w-[112px] h-[44px]',
              'font-Oswald font-semibold',
              'flex justify-center items-center',
              'rounded-[8px]',
              'bg-[#FF7900]'
            )}
            onClick={() => {
              handleCalim();
            }}
          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}
