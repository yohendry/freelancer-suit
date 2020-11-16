import React, { forwardRef, useRef } from 'react';
import { default as ProjectCard } from '@Components/Project/Card';
import Task from '@Components/Task';
const Home = () => {
  const taskRefsList = useRef([]);

  const _onTimerStart = (id) => {
    const foundRef = taskRefsList.current.find((item) => item.id === id);
    if (!foundRef) return;
    taskRefsList.current //list of refs
      .filter((item) => item.id !== id) //get the items not active
      .forEach((item) => item.ref.stopTimer()); //perform stop
  };

  const setTaskRef = (ref, id) => {
    const foundRef = taskRefsList.current.find((item) => item.id === id);
    if (foundRef) return;
    taskRefsList.current.push({ id, ref });
  };

  const taskList = [
    {
      id: 'YOH-420',
      title: 'test title jira',
      done: false,
      provider: 'jira',
      url: '#',
      elapsed: 123123,
    },
    {
      id: 'YQYjc1gC',
      title: 'test title trello',
      done: false,
      provider: 'trello',
      url: '#',
    },
  ];

  return (
    <div>
      <section>
        <div className="text-xl font-bold">Project List</div>
        <div className="flex flex-no-wrap overflow-x-auto">
          <ProjectCard
            project={{
              provider: 'trello',
              url: 'https://www.google.com',
              title: 'test - project',
              description: 'some description text here more or less',
            }}
            className="w-1/3"
          />
          <ProjectCard
            project={{
              provider: 'trello',
              url: 'https://www.google.com',
              title: 'test - project',
              description: 'some description text here more or less',
            }}
            className="w-1/3"
          />
          <ProjectCard
            project={{
              provider: 'trello',
              url: 'https://www.google.com',
              title: 'test - project',
              description: 'some description text here more or less',
            }}
            className="w-1/3"
          />
          <ProjectCard
            project={{
              provider: 'trello',
              url: 'https://www.google.com',
              title: 'test - project',
              description: 'some description text here more or less',
            }}
            className="w-1/3"
          />
          <ProjectCard
            project={{
              provider: 'trello',
              url: 'https://www.google.com',
              title: 'test - project',
              description: 'some description text here more or less',
            }}
            className="w-1/3"
          />
        </div>
      </section>
      <section className="mt-4">
        <div className="text-xl font-bold">Task from Project XXXXX</div>
        <div className="panel--body">
          <ul className="task-list">
            {taskList.map((task) => (
              <li key={task.id}>
                <Task
                  task={task}
                  _onTimerStart={_onTimerStart}
                  ref={(ref) => {
                    setTaskRef(ref, task.id);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default forwardRef(Home);
