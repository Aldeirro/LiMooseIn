

import { Result } from 'antd';
import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import BookingCard from '../dashboard/BookingCard';
import VehicleCard from '../dashboard/VehicleCard';
import UsersCard from '../dashboard/UsersCard';

function Dashboard() {
  // fetch dashboard API data
  const [loading, error, response] = useFetchData('/api/v1/dashboard');

  return (
    <div>
      <h2 className='text-[20px] text-center font-text-font font-medium py-4'>
        Welcome to LiMOOSEin — Dashboard
      </h2>

      {error ? (
        <Result
          title='Failed to fetch'
          subTitle={error}
          status='error'
        />
      ) : (
        <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
          <UsersCard
            loading={loading}
            data={response?.data?.users_info}
          />

          <VehicleCard
            loading={loading}
            data={response?.data?.vehicles_info}
          />

          <BookingCard
            loading={loading}
            data={response?.data?.booking_info}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(Dashboard);
