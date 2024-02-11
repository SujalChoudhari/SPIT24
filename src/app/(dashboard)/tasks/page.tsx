"use client";
import KanbanBoard from '@/components/KanbanBoard'
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import React, { useEffect } from 'react'


export default function page() {
  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '#kanban', popover: { title: 'All Tasks', description: 'Find all the tasks in the Projects, \nDeveloper Tasks are pulled via Github', side: "left", align: 'start' } },
      { element: '#kanban', popover: { title: 'Drag and Drop', description: 'Drag and Drop Tasks to change the status', side: "left", align: 'start' } },
    ]
  });

  useEffect(()=> {
    driverObj.drive()
  },[])

  return (
    <div  id='kanban' className='w-[80vw]'>
      <h1 className=' ml-14 text-lg font-extrabold'>Sprints</h1>
      <KanbanBoard />
    </div>

  )
}

