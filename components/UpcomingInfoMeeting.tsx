'use client';

import { useGetCalls } from '@/hooks/useGetCalls';
import { memo, useMemo } from 'react';

const UpcomingInfoMeeting = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  const upcomingMeetingDate = useMemo(() => {
    if (!isLoading && Number(upcomingCalls?.length) > 0) {
      const time = upcomingCalls?.[0]?.state?.startsAt?.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      return `Upcoming Meeting at: ${time}`;
    }
    return 'No Meetings Scheduled';
  }, [upcomingCalls, isLoading]);

  return (
    <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
      {upcomingMeetingDate}
    </h2>
  );
};

export default memo(UpcomingInfoMeeting);
