"use client";
import React from 'react';
import { Clock } from 'lucide-react';

// Single time block with label
interface Slot { open: string; close: string; label: string }
// Weekly schedule (0 = Sunday)
interface WeeklyMultiSchedule {
  [key: number]: Slot[];
}

// Czech weekday names
const WEEKDAY_NAMES = [
  'Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota',
];

// Define schedule
const MULTI_SCHEDULE: WeeklyMultiSchedule = {
  0: [],
  1: [
    { open: '08:00', close: '10:00', label: 'Operace, výjezdová služba' },
    { open: '16:00', close: '18:00', label: 'Ordinace' },
  ],
  2: [
    { open: '08:00', close: '10:00', label: 'Ordinace' },
  ],
  3: [
    { open: '08:00', close: '10:00', label: 'Operace, výjezdová služba' },
    { open: '16:00', close: '18:00', label: 'Ordinace' },
  ],
  4: [
    { open: '08:00', close: '10:00', label: 'Operace, výjezdová služba' },
    { open: '16:00', close: '18:00', label: 'Objednání pacienti' },
  ],
  5: [
    { open: '08:00', close: '10:00', label: 'Ordinace' },
  ],
  6: [],
};

const OpeningHoursTable: React.FC = () => {
  const todayIndex = new Date().getDay();

  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-teal-500 text-white text-center py-4 uppercase tracking-wide">
          <Clock className="inline-block mr-2 align-middle" size={24} />
          ORDINAČNÍ HODINY
        </div>

        {/* Table */}
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-1/4" />
            <col className="w-3/8" />
            <col className="w-3/8" />
          </colgroup>
          <thead>
            <tr className="hidden">
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {Object.entries(MULTI_SCHEDULE).map(([key, slots]) => {
              const idx = Number(key);
              const isToday = idx === todayIndex;
              const [morning, afternoon] = slots;

              return (
                <tr
                  key={idx}
                  className={
                    `border-b border-gray-200 transition-colors ${
                      isToday ? 'bg-teal-50 font-semibold' : 'hover:bg-gray-50'
                    }`
                  }
                >
                  {/* Day name */}
                  <td className="px-6 py-4 text-left text-gray-700">
                    {WEEKDAY_NAMES[idx]}
                  </td>

                  {/* Morning slot */}
                  <td className="px-6 py-4 text-center">
                    {morning ? (
                      <>
                        <div className="text-teal-600 font-medium">
                          {morning.open}–{morning.close}
                        </div>
                        <div className="text-teal-600 text-sm">
                          {morning.label}
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>

                  {/* Afternoon slot */}
                  <td className="px-6 py-4 text-center">
                    {afternoon ? (
                      <>
                        <div className="text-gray-800 font-medium">
                          {afternoon.open}–{afternoon.close}
                        </div>
                        <div className="text-gray-700 text-sm">
                          {afternoon.label}
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpeningHoursTable;
