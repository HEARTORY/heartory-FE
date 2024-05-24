import React, { useState } from "react";

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
import Loading from "@/components/PublicComponents/Loading";
// import { devEnvGoogleAuth } from "../constants";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function PasswordResetForm({ className, ...props }: UserAuthFormProps) {
    const [loading, setLoading] = useState(false);
    const { resetToken } = useParams();

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
            setLoading(true);
            const res = await loginApi.reset(values.password, resetToken as string);
            if (res.status === 200) {
                if (res.data.statusCode === 200) {
                    setLoading(false);
                    toast({
                        variant: "success",
                        title: res.data.message,
                        description: "You can log in Heartory with new password now!",
                    });
                } else {
                    setLoading(false);
                    toast({
                        variant: "destructive",
                        title: res.data.message,
                        description: "Please try again!",
                    });
                }
            } else {
                setLoading(false);
                toast({
                    variant: "destructive",
                    title: res.data.message,
                    description: "Please try again!",
                });
            }
        } catch (error: any) {
            setLoading(false);
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
                                    type="submit"
                                    disabled={loading}>
                                    Submit
                                    {loading && <div className="ml-2 h-5 w-5"><Loading></Loading></div>}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
