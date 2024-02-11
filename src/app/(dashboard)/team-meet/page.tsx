"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function page() {
    const { roomId } = useParams();

    const myMeeting = async (element: HTMLElement) => {
        const appID = 489322233;
        const serverSecret = "df7711107f965eeec247cad615e730a0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            "328",
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
            {/* @ts-ignore */}
            <div ref={myMeeting} />
        </div>

    )
}