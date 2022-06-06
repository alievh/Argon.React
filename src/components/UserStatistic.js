import React from 'react'

function UserStatistic({statisticCount, statisticName}) {
  return (
    <div className='statistic'>
        <span className='statistic__count'>
            {statisticCount}
        </span>
        <span className='statistic__name'>
            {statisticName}
        </span>
    </div>
  )
}

export default UserStatistic