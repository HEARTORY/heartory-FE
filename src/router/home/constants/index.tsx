import Sound from "@/assets/images/diet1.png";
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
            "We calculate your Heartbeat index from data like age, height, weight.",
    },
    {
        link: "doctor",
        src: AIdoc,
        alt: "AI Doctor Chat",
        name: "AI Doctor Chat",
        description:
            "Solve your queries by interacting with our bot. Take advice from the doctor.",
    },
    {
        link: "sound",
        src: Sound,
        alt: "Healing sound recommendation",
        name: "Healing sound recommendation",
        description: "We provide food recomendation according to your calorie requirements.",
    },
    {
        link: "exercises",
        src: Stats,
        alt: "Tailored Exercises",
        name: "Tailored Exercises",
        description: "Get all the nutritional values of your preferred exercises.",
    },
];
