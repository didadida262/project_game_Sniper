import SectionFourth from '@/components/AirDrop/SectionFourth';
import SectionHeader from '@/components/AirDrop/SectionHeader';
import SectionSecond from '@/components/AirDrop/SectionSecond';
import SectionThird from '@/components/AirDrop/SectionThird';

export default function AirDrop() {
  return (
    <div className='relative min-h-screen bg-[#000000] font-Poppins text-white '>
      <SectionHeader />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
    </div>
  );
}
