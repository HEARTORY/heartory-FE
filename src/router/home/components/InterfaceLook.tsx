import Carousel from "./Carousel";
import dowload from "@/assets/images/dowload.png";
import QR from "@/assets/images/qr.png";
import { Button } from "@/components/ui/Button";
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
import apk from "@/assets/images/apk.png";
import google from "@/assets/images/google-play.png";
import { toast } from "@/components/ui/Toast/use-toast";
export const InterfaceLook: React.FC = () => {
    const handleRedirectGooglePlay = () => {
        toast({
            variant: "destructive",
            title: "Under development",
            description: "Google play will come to you very soon!.",
        });
    };
    const handleCopy = () => {
        const downloadLink = "https://heartory.vercel.app/dowload";
        navigator.clipboard.writeText(downloadLink).then(
            () => {
                toast({
                    variant: "success",
                    title: "Copy download link successfully",
                    description: "Let's go straight to download!! ",
                });
            },
            () => {
                toast({
                    variant: "destructive",
                    title: "Failed to copy",
                    description: "Unable to copy the download link.",
                });
            }
        );
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#38419d] mt-10 text-center">
                CHECKOUT OUR APP INTERACE LOOK
            </h1>
            <h3 className="text-center  w-[75%] md:w-[55%] mt-6 text-gray-600 text-sm">
                Experience seamless navigation and intuitive design. Dive into
                the sleek, user-friendly interface of our app today!
            </h3>
            <Carousel />
            <div className="mt-4 flex w-full justify-between p-20  flex-col md:flex-row items-center">
                <div className=" md:w-[65%] w-full mb-20 md:mb-0">
                    <h1 className="font-bold text-[#38419d] text-2xl uppercase mb-2">
                        Dowload Our App Now
                    </h1>
                    <p className="text-gray-500">
                        Unlock your path to a happier, healthier life. Download
                        the HEARTORY app now!
                    </p>
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
                <div className="md:w-[50%]">
                    <img src={dowload} />
                </div>
            </div>
        </div>
    );
};
