import Image from "next/image";
import { Tabs } from "../ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Sprints",
      value: "sprints",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Effective Sprint Management using Kanban Boards</p>
          <DummyContent imageSrc="/landing/images/1.png" />
        </div>
      ),
    },
    {
      title: "Timeline",
      value: "timeline",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Gantt Chart for managing various sprints</p>
          <DummyContent imageSrc="/landing/images/2.png" />
        </div>
      ),
    },
    {
        title: "Sentiment Analysis",
        value: "Sentiment Analysis",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>AI Analyses each Tasks and provides Feedback</p>
            <DummyContent imageSrc="/landing/images/3.png" />
          </div>
        ),
      },
      {
        title: "Analytics",
        value: "",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Detailed Analytics Board with Graphs</p>
            <DummyContent imageSrc="/landing/images/4.png" />
          </div>
        ),
      },
      {
        title: "Chat",
        value: "chat",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Chat functionality ensuring effective communication</p>
            <DummyContent imageSrc="/landing/images/5.png" />
          </div>
        ),
      },
      {
        title: "User Feedback",
        value: "user feedback",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Feedback API for user testing</p>
            <DummyContent imageSrc="/landing/images/6.png" />
          </div>
        ),
      },
    // Add more tabs with different image sources as needed
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imageSrc }) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};
