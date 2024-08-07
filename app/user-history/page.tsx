import { TaskHistory } from '@ccc-types';

import HistoryList from './_components/HistoryList';

const HistoryListMockData: TaskHistory = [
  {
    tasksDone: [
      {
        deletedAt: '2024-05-24T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-05-24T06:12:08.806Z',
        doneAt: '2024-05-24T06:12:08.806Z',
        description: '법인 설립 안내드리기',
        name: 'string',
        updatedAt: '2024-05-24T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-06-22T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-06-22T06:12:08.806Z',
        doneAt: '2024-06-22T06:12:08.806Z',
        description: '고객 정보에 따라 커스텀 정관 제공하기',
        name: 'string',
        updatedAt: '2024-06-22T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-07-29T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-07-29T06:12:08.806Z',
        doneAt: '2024-07-29T06:12:08.806Z',
        description: '법인 인감도장, 등기서류, 인감증명서 발급하기',
        name: 'string',
        updatedAt: '2024-07-29T06:12:08.806Z',
        id: 0,
      },
    ],
  },
  {
    tasksDone: [
      {
        deletedAt: '2024-05-24T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-05-24T06:12:08.806Z',
        doneAt: '2024-05-24T06:12:08.806Z',
        description: '법인 설립 안내드리기',
        name: 'string',
        updatedAt: '2024-05-24T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-06-22T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-06-22T06:12:08.806Z',
        doneAt: '2024-06-22T06:12:08.806Z',
        description: '고객 정보에 따라 커스텀 정관 제공하기',
        name: 'string',
        updatedAt: '2024-06-22T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-07-29T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-07-29T06:12:08.806Z',
        doneAt: '2024-07-29T06:12:08.806Z',
        description: '법인 인감도장, 등기서류, 인감증명서 발급하기',
        name: 'string',
        updatedAt: '2024-07-29T06:12:08.806Z',
        id: 0,
      },
    ],
  },
  {
    tasksDone: [
      {
        deletedAt: '2024-05-24T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-05-24T06:12:08.806Z',
        doneAt: '2024-05-24T06:12:08.806Z',
        description: '법인 설립 안내드리기',
        name: 'string',
        updatedAt: '2024-05-24T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-06-22T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-06-22T06:12:08.806Z',
        doneAt: '2024-06-22T06:12:08.806Z',
        description: '고객 정보에 따라 커스텀 정관 제공하기',
        name: 'string',
        updatedAt: '2024-06-22T06:12:08.806Z',
        id: 0,
      },
      {
        deletedAt: '2024-07-29T06:12:08.806Z',
        userId: 0,
        recurringId: 0,
        frequency: 'DAILY',
        date: '2024-07-29T06:12:08.806Z',
        doneAt: '2024-07-29T06:12:08.806Z',
        description: '법인 인감도장, 등기서류, 인감증명서 발급하기',
        name: 'string',
        updatedAt: '2024-07-29T06:12:08.806Z',
        id: 0,
      },
    ],
  },
];

function HistoryPage() {
  return (
    <section
      className={`center mx-auto w-full ${HistoryListMockData.length === 0 && 'h-screen'} max-w-[1232px] flex-col gap-6 px-4`}
    >
      <h1 className="mr-auto mt-5 text-[20px] font-bold">마이 히스토리</h1>
      {HistoryListMockData.length !== 0 ? (
        HistoryListMockData.map((task) => (
          <HistoryList tasks={task.tasksDone} />
        ))
      ) : (
        <div className="flex h-full items-center">
          <p className="text-[14.8px] font-medium text-text-default">
            아직 히스토리가 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}

export default HistoryPage;
