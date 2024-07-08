import React from "react";
import Phone from "@/assets/images/Phone.png";
import { motion } from "framer-motion";
import apk from "@/assets/images/apk.png";
import google from "@/assets/images/google-play.png";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion/motion";
import Background from "@/assets/images/Background Image.png";
import { toast } from "@/components/ui/Toast/use-toast";
import { Button } from "@/components/ui/Button";
import QR from "@/assets/images/qr.png";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/Dialog";
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
const Introduction: React.FC = () => {
    const handleRedirectGooglePlay = () => {
        toast({
            variant: "destructive",
            title: "Under development",
            description: "Google play will come to you very soon!.",
        });
    };
    const handleCopy = () => {
        toast({
            variant: "success",
            title: "Copy dowload link sucessfully",
            description: "Let's go straight to dowload!! ",
        });
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex  flex-col items-center justify-around lg:justify-between text-center lg:text-start mb-10 p-10 min-[1110px]:flex-row"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <motion.div
                variants={slideInFromLeft(0.2)}
                className="flex flex-col gap-10  sm:border-[18px] border-[#66D0A4] sm:h-[500px] sm:w-[500px] relative"
            >
                <div className=" sm:absolute sm:h-[400px] sm:w-[450px] bg-white left-[-30px] top-6 flex flex-col p-8">
                    <h1 className="font-bold text-5xl uppercase text-[#38419d]">
                        WELCOME TO HEARTORY
                    </h1>
                    <h2 className="mt-4 font-bold text-[#66D0A4] text-xl">
                        Taking good care of your mental health has never been
                        more important.
                    </h2>
                    <h1 className="mt-4 font-bold text-[#38419d] text-3xl">
                        DOWLOAD APP NOW
                    </h1>
                    <div className="flex flex-col min-[400px]:justify-start min-[400px]:pr-8 cursor-pointer mt-2 min-[400px]:flex-row items-center justify-center">
                        <img
                            src={google}
                            className="min-[400px]:mr-4"
                            onClick={handleRedirectGooglePlay}
                        />

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost">
                                    <img src={apk} className="w-[150px]" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-[1100px]  ">
                                <DialogHeader>
                                    <DialogTitle className="font-bold text-[#38419d]">
                                        Dowload Heartory APK
                                    </DialogTitle>
                                    <DialogDescription>
                                        Scan this QR on your phone or copy to
                                        unlock your path to a happier, healthier
                                        life. Download the HEARTORY app now!
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex w-full justify-center">
                                    <img src={QR} className="w-[400px]" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <Label
                                            htmlFor="link"
                                            className="sr-only"
                                        >
                                            Link
                                        </Label>
                                        <Input
                                            id="link"
                                            defaultValue="https://heartory.vercel.app/dowload"
                                            readOnly
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="sm"
                                        className="px-3 bg-[#66D0A4] text-black hover:bg-[#255d46]"
                                        onClick={handleCopy}
                                    >
                                        <span className="sr-only text-black">
                                            Copy
                                        </span>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                        >
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.3)}
                className="lg:basis-2/5"
            >
                <img src={Phone} alt="" />
            </motion.div>
        </motion.div>
    );
};

export default Introduction;
