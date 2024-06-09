// import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import axios from "axios";



export default function Success() {

    const [useremail, setEmail] = useState("");
    const [username, setName] = useState("");

    const emailBody = `
    <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <h1 style="color: #4CAF50; text-align: center;">Thank You for Supporting Vridharshram</h1>

        <p>Dear <span style="font-weight: bold;">${username}</span>,</p>

        <p>On behalf of the entire Vridharshram team, we want to express our heartfelt gratitude for your generous donation. Your support plays a crucial role in providing shelter, food, medical care, and companionship to the elderly who have no one to look after them.</p>

        <p>Your donation will help us cover the expenses of rent, electricity, water, groceries, medicines, and staff salaries. It will also enable us to organize recreational activities, cultural events, and spiritual programs for our residents.</p>

        <p>Vridharshram is a registered charity under section 80G of the Income Tax Act, which means that your donation is eligible for tax deduction.</p>

        <p>We are honored to have individuals like you who care about the well-being of our elders. Your contribution makes a significant difference in their lives.</p>

        <p>Thank you once again for your compassion and generosity. We deeply appreciate your support in our mission to make a positive impact on the lives of senior citizens.</p>

        <p style="font-size: 0.8em; text-align: center;">With gratitude,<br>Team ElderHub</p>

    </div>
</body>
    
    `

    const subjectx = `We're Sending Gratitude and Sunshine: Thanks for Supporting ElderHub!`


    const templateParams = {
        from_name: "Team ElderHub",
        to_name: username,
        to_email: useremail,
        message_html: emailBody,
        subject: subjectx

    }

   


    const userId = 'C2GNdb0mHnfCgReZj';

    emailjs.init(userId);
    useEffect(() => {
        const getEmail = async () => {
            try {
                const res = await axios.get("http://localhost:8080/student/donation/latest");
                console.log(res.data);
                const { email, name } = res.data;
                setEmail(email);
                setName(name);
                console.log("details : ", useremail, username);

                await emailjs.send('service_ez2nyt1', 'template_9gbs2an', templateParams)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (error) {
                        console.log('FAILED...', error);
                    });
            } catch (err) {
                console.log(err);
            }
        }

        getEmail();
    }, [useremail, username]);






    return (
        <div>
            <div className="bg-gray-100 h-screen">
                <div className="bg-white p-6  md:mx-auto">
                    <img className="w-16 h-16 mx-auto my-6" src="https://img.icons8.com/fluency/48/ok--v1.png" alt="cancel--v1" />
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                        <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                        <p> Have a great day!  </p>
                        <div className="py-10 text-center">
                            <Link to='/' className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                GO BACK
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
