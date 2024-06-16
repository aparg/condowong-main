import dynamic from 'next/dynamic';

const DynamicScheduleTime = dynamic(() => import('@/components/ScheduleTime'), {
  ssr: false
});

export default DynamicScheduleTime;
