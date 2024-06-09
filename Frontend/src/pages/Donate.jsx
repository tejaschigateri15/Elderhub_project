// import React from 'react'

import Nav from "./Nav";
import '../css/Donate.css'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from 'sonner'



export default function Donate() {

    const [donationamount, setDonationamount] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [billingAddress, setBillingAddress] = useState("");

    const formdata = {
        name: name,
        email: email,
        phoneNo: phoneNo,
        billingAddress: billingAddress,
        donationamount: donationamount

    }

    // const cc = useSelector((state) => state.user_info.useremail );
    // const pp = useSelector((state) => state.user_info.username);
  
    const handlePayment = async() => {
       
        if(!name || !email || !phoneNo || !billingAddress || !donationamount){
            toast.error('Please fill in all required fields.', { duration: 2000 });
            return;
        }
        try {  
            const response = await axios.post("http://localhost:3000/create-checkout-session", {
             amount: 1000000
            });
            console.log(response.data.url);
            window.location = response.data.url;
            const res = await axios.post("http://localhost:8080/student/donation/add", formdata);
            console.log(res.data);
          } catch (error) {
            console.error(error.response.data.error);
          }
    }


    return (
        <div>
            <Nav />
            <Toaster position="top-center" />
            <div className="main-contain flex mt-10 mb-20 flex-col  items-center">
                <div className="abour flex gap-24 justify-center  mb-24">
                    <div className="mainHeadingg head flex items-center gap-6">
                        <h1 className="text-5xl font-bold text-center text-custom-purple  ">"Make a Difference Today. " </h1>
                        <div className="imjoin mt-3"><img src="holding-hands.png" alt="" className="w-12 h-12 " /></div>
                    </div>

                </div>
                <div className="helper w-[800px]">
                    <div className="cards">
                        <div className="card-1 ">
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <div className="flex gap-10">
                                    <div className="card-1-img"><img src="connor-hall-r-HLeGnbY-8-unsplash.jpg" alt="" className="w-20 h-20 rounded-full" /></div>
                                    <div className="card-1-text">
                                        <h1 className="text-2xl font-bold text-custom-purple">Donate</h1>
                                        <p className="text-gray-500">Your donation is a lifeline for our elderly community, providing comfort, care, <br />and a brighter chapter in their golden years. Join us in making a difference today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="donationform mt-16 w-[550px]">
                    <div className="indohead p-16 border-solid border-4 border-custom-purple rounded-3xl">
                        <h1 className='text-3xl font-bold text-zinc-600 text-center mb-6'>Donation Form</h1>
                        <div className="inputs">
                            <div className="flex flex-col gap-2 space-y-1.5 mt-8">
                                <Label htmlFor="name ">Fullname</Label>
                                <Input id="name" placeholder="fullname" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 space-y-1.5 mt-8">
                                <Label htmlFor="name ">Email</Label>
                                <Input id="name" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 space-y-1.5 mt-8">
                                <Label htmlFor="name ">Phone no.</Label>
                                <Input id="name" placeholder="phone no." onChange={(e) => setPhoneNo(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2 space-y-1.5 mt-8">
                                <Label htmlFor="name ">Donation amount.</Label>
                                <Input id="name" placeholder="amount in Rs" type="number" onChange={(e) => setDonationamount(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1 space-y-1.5 mt-8 ">
                                <Label htmlFor="name ">Billing Address </Label>
                                <Textarea  onChange={ (e)=>setBillingAddress(e.target.value)}  placeholder="provide your billing address here" />
                            </div>
                            <Button className='bg-custom-purple hover:bg-custom-purple mt-8' onClick={handlePayment}>Donate Now</Button>
                        </div>
                    </div>
                </div>

                <div className="testimonials mt-20">
                    <div className="testimonial flex gap-24">
                        <div className="test1 bg-white p-8 rounded-lg shadow-md">
                            <div className="testimg mb-4"><img src="image-11-1.webp" alt="Mrs. Anjali Sharma" className="w-24 h-24 object-cover rounded-full" /></div>
                            <div className="testname text-2xl font-bold mb-2">Mrs. Thimakka</div>
                            <div className="testdesc text-gray-600">
                                <p>"Namaste! I am Mrs. Anjali Sharma, and I am 95 years old. After losing my husband, I found solace and companionship at Elder Hub. The caring staff and the vibrant community here have brought joy back into my life. Your donations have made a significant impact, providing not just a place to stay but a home filled with warmth and support. I am grateful for your generosity, which has created a loving haven for us seniors. Thank you for making a difference in our lives."</p>
                            </div>
                        </div>

                        <div className="test1 bg-white p-8 rounded-lg shadow-md">
                            <div className="testimg mb-4"><img src="istockphoto-1213291408-612x612.jpg" alt="Mr. Rajendra Singh" className="w-24 h-24 object-cover rounded-full" /></div>
                            <div className="testname text-2xl font-bold mb-2">Mr. Rajendra Singh</div>
                            <div className="testdesc text-gray-600">
                                <p>"Sat Sri Akaal! My name is Rajendra Singh, and I am 82 years young. The team at Elder Hub has been like family to me. Through your generous contributions, we've been able to enjoy cultural activities, yoga sessions, and delicious meals. Your support goes beyond just financial help; it brings a sense of belonging and happiness. I am living my golden years with dignity and joy, and I extend my heartfelt gratitude to all the wonderful donors who make this possible."</p>
                            </div>
                        </div>

                        <div className="test1 bg-white p-8 rounded-lg shadow-md">
                            <div className="testimg mb-4"><img src="840600-39889-mxxltjjonz-1497420426.jpg" alt="Mrs. Leela Devi" className="w-24 h-24 object-cover rounded-full" /></div>
                            <div className="testname text-2xl font-bold mb-2">Mrs. Leela Devi</div>
                            <div className="testdesc text-gray-600">
                                <p>"Pranam! I am Mrs. Leela Devi, aged 85. Life at Elder Hub is a blessing for me. Your donations have not only provided a roof over my head but have given me the chance to connect with like-minded individuals. The caring staff ensures our well-being, and the various activities keep us mentally and physically active. Your generosity truly transforms lives, offering us a sense of community and purpose. Thank you for being a source of hope and compassion for the elderly."</p>
                            </div>
                        </div>
                    </div>
                </div>

                
             
            </div>
        </div>

    )
}
