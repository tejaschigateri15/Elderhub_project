import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import '../css/loginpage.css'
import { Link } from "react-router-dom"

export default function Test() {
    return (
        <div className="maincontainer bg-[url('')] flex">
            <div className="containerx ">

                <div className="formwrapper  ">
                    <Card className="w-[770px]  caard h-screen flex items-center flex-col justify-center ">
                        <div className="lgg w-[380px] ">
                            {/* <ModeToggle/> */}
                            <CardHeader>
                                <CardTitle>Login Form</CardTitle>
                                <CardDescription>Login to your account</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-6">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Email</Label>
                                            <Input id="name" placeholder="Name of your project" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="framework">Password</Label>
                                            <Input id="password" placeholder="Enter your password here" type="password" />
                                        </div>
                                        <div className="ask text-gray-600 flex gap-2">
                                            <p>Already have an account?</p>
                                            <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                                        </div>

                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-center my-2">
                                <Button>Submit</Button>
                            </CardFooter>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="loginimg">
                <div className="loginHead flex items-center flex-col mt-28 px-10 ">
                    <h1 className="text-4xl font-bold text-slate-400 text-center hover:text-slate-200"><Link to="/">Welcome to Elder Hub</Link> </h1>
                    <p className="text-1xl  mt-5 font-semibold text-slate-600 text-center">At Elder Hub, our vridhashram is more than just a residence; it's a nurturing space where we prioritize the well-being, comfort, and joy of our seniors, ensuring each day is filled with warmth and care</p>
                </div>
                <div className="logimg ">
                    <img src="_Downloader.la_-65b3b5830c6bb-removebg.png" alt="" className="hover:opacity-90" />
                </div>
            </div>
        </div>
    )
}
