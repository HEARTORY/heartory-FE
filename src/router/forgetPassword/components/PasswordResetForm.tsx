import React, { useEffect } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    // FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginApi } from "@/utils/api/loginApi";
import { toast } from "@/components/ui/Toast/use-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { devEnvGoogleAuth } from "../constants";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function PasswordResetForm({ className, ...props }: UserAuthFormProps) {
    const { resetToken } = useParams();
    const navigate = useNavigate();
    async function onValidate() {
        if (resetToken) {
            const res = await loginApi.validateReset(resetToken);
            try {
                if (res.status != 200) {
                    navigate("/home");
                } else if (res.data.statusCode != 200) {
                    navigate("/home");
                }
            } catch (error: any) {
                console.log(error);
                toast({
                    variant: "destructive",
                    title: error.response.data.message,
                    description: "Please try again!",
                });
                navigate("/home");
            }
        }
    }
    useEffect(() => {
        onValidate();
    }, [resetToken]);
    const formSchema = z.object({
        password: z
            .string()
            .min(8, {
                message:
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character",
            })
            .regex(/[A-Z]/, {
                message: "Password must contain at least one uppercase letter.",
            })
            .regex(/[a-z]/, {
                message: "Password must contain at least one lowercase letter.",
            })
            .regex(/[0-9]/, {
                message: "Password must contain at least one number.",
            })
            .regex(/[!@#$%^&*(),.?":{}|<>]/, {
                message:
                    "Password must contain at least one special character.",
            }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
        },
    });
    async function onSubmit(
        values: z.infer<typeof formSchema>
    ) {
        try {
            const res = await loginApi.reset(values.password, resetToken as string);
            if (res.status === 200) {
                if (res.data.data) {
                    toast({
                        variant: "success",
                        title: "Reset Password Successfully",
                        description: "You can log in Heartory with new password now!",
                    });
                } else {
                    toast({
                        variant: "destructive",
                        title: res.data.message,
                        description: "Please try again!",
                    });
                }
            } else {
                toast({
                    variant: "destructive",
                    title: res.data.message,
                    description: "Please try again!",
                });
            }
        } catch (error: any) {
            console.log(error);
            toast({
                variant: "destructive",
                title: error.response.data.message,
                description: "Please try again!",
            });
        }
    }
    return (
        <div className={cn("grid gap-7", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="text-[#38419D]">
                        <div className="text-center sm:text-start font-semibold text-3xl mb-8 mt-16">
                            Enter your new Password here!
                        </div>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="New Password"
                                                    type="password"
                                                    {...field}
                                                    className="mb-4 rounded-full p-7 text-lg"
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="mt-5 p-6 text-lg mb-14"
                                    variant={"blueCustom"}
                                    type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
