"use client";
import KanbanBoard from '@/components/KanbanBoard'
import React from 'react'


export default function page() {
  return (
    <div>
      <h1 className=' ml-14 text-lg font-extrabold'>Sprints</h1>
      <KanbanBoard />
    </div>

  )
}

