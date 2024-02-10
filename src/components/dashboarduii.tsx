import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";

const tasksData = [
  { title: "Introduction to Web Development", description: "Complete the following tasks to finish the course", progress: 25 },
  // Add more tasks as needed
];

const Component = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <div className="flex min-h-screen items-start w-full py-6">
      <div className="container grid gap-6 px-4 md:px-6">
      <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Alice Freeman</h1>
              <p className="text-gray-500 dark:text-gray-400">alice.freeman@example.com</p>
              <p className="text-gray-500 dark:text-gray-400">Designer</p>
              <p className="text-gray-500 dark:text-gray-400">ID: 123456</p>
            </div>

        <div className="grid gap-4">
          {tasks.map((task, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <ActivityIcon className="w-6 h-6" />
                    <span className="text-sm font-medium">Task {index + 1}</span>
                    <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{`${task.progress}%`}</span>
                  </div>
                  <Progress
                    className="h-1 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gradient-to-r dark:from-green-600 dark:to-blue-700"
                    value={task.progress}
                    variant="linear"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// ActivityIcon and FileEditIcon components remain unchanged

export default Component;
