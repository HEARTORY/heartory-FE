import Exer from "@/assets/images/diet1.png";
import Stats from "@/assets/images/stats-21.png";
import AIdoc from "@/assets/images/chatbot1.png";
import Medical from "@/assets/images/medical.png";

export const areaInfo = [
    {
        link: "heartbeat",
        src: Medical,
        alt: "heartbeat",
        name: "Heartbeat Measuring",
        description:
            "We measure your Heartbeat index using PPG mobile camera.",
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
