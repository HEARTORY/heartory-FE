import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Google from "@/assets/images/Google.png";
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
import { useNavigate } from "react-router-dom";
// import { devEnvGoogleAuth } from "../constants";
import { useDispatch } from "react-redux";
import { actions } from "../slice";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function LoginForm({ className, ...props }: UserAuthFormProps) {
    const dispatch = useDispatch();
    // const [userName, setUserName] = React.useState("");
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        // window.location.replace(devEnvGoogleAuth());
    };
    const formSchema = z.object({
        email: z.string().email({
            message: "Invalid email format.",
        }),
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
            // .regex(/[0-9]/, {
            //     message: "Password must contain at least one number.",
            // })
            .regex(/[!@#$%^&*(),.?":{}|<>]/, {
                message:
                    "Password must contain at least one special character.",
            }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    async function onSubmit(
        values: z.infer<typeof formSchema>
    ) {
        try {
            const res = await loginApi.login(values.email, values.password);
            if (res.status === 200) {
                if (res.data.data) {
                    localStorage.setItem(
                        "Token",
                        res.data.data.accessToken
                    );
                    dispatch(actions.setToken(res.data.data.accessToken));
                    toast({
                        variant: "success",
                        title: "Login Successfully",
                        description: "Login Successfully",
                    });
                    dispatch(actions.setUser(res.data.data.user));
                    const role: string = res.data.data.user.role.roleTitle;
                    // console.log(res.data.data.accessToken, role);

                    if (role == "admin") {
                        navigate("/home");
                    } else {
                        navigate("/home");
                    }
                } else {
                    toast({
                        variant: "destructive",
                        title: res.data.messages[0].content,
                        description: "Please Try again",
                    });
                }
            } else {
                for (const mess of res.data.messages) {
                    toast({
                        variant: "destructive",
                        title: mess.content,
                        description: "Please Try again",
                    });
                }
            }
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Login Error",
                description: "Please Try again",
            });
        }
    }
    return (
        <div className={cn("grid gap-7", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="text-[#38419D]">
                        <div className="font-semibold text-4xl mb-8">
                            Welcome Back
                        </div>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Email"
                                                    {...field}
                                                    className="mb-4 rounded-full p-7 text-lg"
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Password"
                                                    type="password"
                                                    {...field}
                                                    className="mb-4 rounded-full p-7 text-lg"
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="mt-5 p-6 text-lg"
                                    variant={"blueCustom"}
                                    type="submit">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
            <div className="relative">
                <div className="relative flex justify-center text-xs">
                    <span className="px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button className="rounded-full p-6" variant="outline" type="button" onClick={handleGoogleLogin}>
                <img src={Google} width={25} className="mr-3" />
                Sign in with Google
            </Button>
        </div>
    );
}
