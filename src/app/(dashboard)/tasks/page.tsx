"use client";
import KanbanBoard from '@/components/KanbanBoard'
import { Burnupdown } from '@/components/burnupdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import React, { useEffect } from 'react'

export function createsp() {
  return (
    <section key="1" className="w-full py-6">
      <div className="container flex flex-1 flex-col gap-4 px-4 md:px-6">
        <Button className="w-full justify-start h-10" variant="outline">
          Create Sprint
        </Button>
        <div>
          <div className="z-10 w-[calc(100%-1rem)] mt-1 rounded-lg border shadow-lg">
            <div className="flex flex-col p-2">
              <h3 className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
                Sprint Name
              </h3>
              <Input
                className="w-full text-sm min-h-[2.5rem] dark:placeholder-gray-400"
                placeholder="Enter sprint name"
              />
            </div>
            <div />
            <div className="flex flex-col p-2">
              <h3 className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
                Select Dates
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label className="text-xs" htmlFor="start">
                    Start
                  </Label>
                  <Input
                    className="w-full text-sm dark:placeholder-gray-400"
                    id="start"
                    placeholder="Start"
                    type="datetime-local"
                  />
                </div>
                <div className="flex flex-col">
                  <Label className="text-xs" htmlFor="end">
                    End
                  </Label>
                  <Input
                    className="w-full text-sm dark:placeholder-gray-400"
                    id="end"
                    placeholder="End"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function page() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '#kanban', popover: { title: 'All Tasks', description: 'Find all the tasks in the Projects, \nDeveloper Tasks are pulled via Github', side: "left", align: 'start' } },
      { element: '#kanban', popover: { title: 'Drag and Drop', description: 'Drag and Drop Tasks to change the status', side: "left", align: 'start' } },
    ]
  });

  useEffect(() => {
    driverObj.drive()
  }, [])

  return (
    <div className="w-[80lvw] md-16 flex flex-col"><div className="container flex flex-1 flex-col gap-4 px-4 md:px-6">
      <Button className="w-full justify-start h-10" variant="outline">
        Create Sprint
      </Button>
      <div>
        <div className="z-10 w-[calc(100%-1rem)] mt-1 rounded-lg border shadow-lg">
          <div className="flex flex-col p-2">
            <h3 className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Sprint Name
            </h3>
            <Input
              className="w-full text-sm min-h-[2.5rem] dark:placeholder-gray-400"
              placeholder="Enter sprint name" />
          </div>
          <div />
          <div className="flex flex-col p-2">
            <h3 className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Select Dates
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <Label className="text-xs" htmlFor="start">
                  Start
                </Label>
                <Input
                  className="w-full text-sm dark:placeholder-gray-400"
                  id="start"
                  placeholder="Start"
                  type="datetime-local" />
              </div>
              <div className="flex flex-col">
                <Label className="text-xs" htmlFor="end">
                  End
                </Label>
                <Input
                  className="w-full text-sm dark:placeholder-gray-400"
                  id="end"
                  placeholder="End"
                  type="datetime-local" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div id='kanban' className='w-[80vw] mt-16'>
        <h1 className=' ml-14 text-lg font-extrabold'>Sprints</h1>
        <KanbanBoard />
        <Burnupdown/>
      </div></div>

  )
}

