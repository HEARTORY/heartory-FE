import Exer from "@/assets/images/diet1.png";
import Stats from "@/assets/images/stats-21.png";
import AIdoc from "@/assets/images/chatbot1.png";
import Medical from "@/assets/images/medical.png";

import chat from "@/assets/images/comment.svg";
import web from "@/assets/images/browser.svg";
import phone from "@/assets/images/cell-phone.svg";
import pen from "@/assets/images/pen.svg";
import eye from "@/assets/images/eye-scanner 1.svg";
import sale from "@/assets/images/male-telemarketer.svg";
export const areaInfo = [
    {
        link: "heartbeat",
        src: Medical,
        alt: "heartbeat",
        name: "Heartbeat Measuring",
        description: "We measure your Heartbeat index using PPG mobile camera.",
    },
    {
        link: "doctor",
        src: AIdoc,
        alt: "AI Doctor Chat",
        name: "AI Doctor Chat",
        description:
            "Solve your queries by interacting with our bot. Take advice from Mia.",
    },
    {
        link: "stats",
        src: Stats,
        alt: "Diagnostics",
        name: "Diagnostics",
        description: "We provide diagnostics according to your statistics.",
    },
    {
        link: "exercises",
        src: Exer,
        alt: "Tailored Exercises",
        name: "Tailored Exercises",
        description: "Get all the suggestions about your preferred exercises.",
    },
];
export const appInfos = [
    {
        title: "INTEGRITY",
        description:
            "At HEARTORY, integrity forms the foundation of our mission and operations. We are committed to maintaining the highest standards of honesty, transparency, and ethical practices.",
    },
    {
        title: "INCLUSIVITY",
        description:
            "HEARTORY is dedicated to promoting inclusivity in all aspects of our programs and services. Our programs are designed to be culturally sensitive and adaptable, addressing the diverse needs of individuals from different walks of life.",
    },
    {
        title: "SYNERGY",
        description:
            "Synergy is at the heart of HEARTORY's approach to mental health. We recognize that the best outcomes are achieved when individuals, communities, and organizations work together towards a common goal.",
    },
];
export const features = [
    {
        className:
            "min-[1110px]:absolute top-[-30%] right-[10%] w-[60%] mb-8  min-[1110px]:m-0 text-center min-[1110px]:text-left flex flex-col items-center min-[1110px]:items-start",
        title: "CHAT WITH MIA",
        description:
            "Communicate with AI model trained with expert cardiology documentary and user’s health data..",
        icon: chat,
    },
    {
        className:
            " min-[1110px]:absolute top-10 min-[1110px]:text-right flex flex-col min-[1110px]:items-end w-[60%] left-[-55%] mb-8  min-[1110px]:m-0 flex flex-col items-center text-center",
        title: "HEART RATE MONITOR",
        description:
            "Heartory measures your heart rate and blood pressure with a phone camera.",
        icon: web,
    },
    {
        className:
            "min-[1110px]:absolute top-10 min-[1110px]:text-left flex flex-col min-[1110px]:items-start w-[60%] right-[-55%] mb-8 min-[1110px]:m-0 flex flex-col items-center text-center",
        title: "DETAILED REPORT",
        description:
            "Heartory gives you detailed analyses of your body and recommendations on how to manage it.",
        icon: phone,
    },
    {
        className:
            "min-[1110px]:absolute bottom-10 min-[1110px]:text-right flex flex-col min-[1110px]:items-end w-[60%] left-[-55%] mb-8  min-[1110px]:m-0 flex flex-col items-center text-center mt-8",
        title: "TAILORED EXERCISE",
        description:
            "Recommend exercises base on your condition. Do exercise to achieve rewards.",
        icon: pen,
    },
    {
        className:
            "min-[1110px]:absolute bottom-10 min-[1110px]:text-left flex flex-col min-[1110px]:items-start w-[60%] right-[-55%] mb-8  min-[1110px]:m-0 flex flex-col items-center text-center",
        title: "HEARTORY STORE",
        description:
            "Heartory provides accessible heart health tips and information so you can make the best choices for you.",
        icon: eye,
    },
    {
        className:
            "min-[1110px]:absolute bottom-10 min-[1110px]:text-left flex flex-col min-[1110px]:items-start w-[60%] bottom-[-30%] mb-8  min-[1110px]:m-0 flex flex-col items-center text-center",
        title: "HEARTORY BLOG",
        description:
            "Heartory provides accessible heart health tips and information so you can make the best choices for you.",
        icon: sale,
    },
];
