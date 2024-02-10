"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Box } from "lucide-react";
import { useParams } from "next/navigation";

export default function TeamMeet() {
    const { roomId } = useParams();

    const myMeeting = async (element: HTMLElement) => {
        // const appID = 1970816942;
        const appID = 489322233;
        // const serverSecret = "3618f8bfceb34f2a19710d02aa3ee8c7";
        const serverSecret = "df7711107f965eeec247cad615e730a0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            "45554",
            Date.now().toString(),
            "Anonymous"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div className="w-[75lvw] mx-4">
            <div ref={myMeeting} />
        </div>

    )
}