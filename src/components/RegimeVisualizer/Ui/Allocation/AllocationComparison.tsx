import { AllocationTransition } from './AllocationTransition';
import type { AllocationComparisonProps } from './types';
import React from 'react';

export function AllocationComparison({
  before,
  after,
  timeframe = 'Over 5-10 days',
  gradient: _gradient,
}: AllocationComparisonProps) {
  return (
    <div className='space-y-6'>
      <AllocationTransition before={before} after={after} />

      {/* Execution Details */}
      <div className='pt-4 border-t border-gray-700'>
        <div className='grid grid-cols-2 gap-4 text-center'>
          <div>
            <div className='text-xs text-gray-400'>Daily Limit</div>
            <div className='text-sm text-white font-semibold'>1-3%</div>
          </div>
          <div>
            <div className='text-xs text-gray-400'>Duration</div>
            <div className='text-sm text-white font-semibold'>{timeframe}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
