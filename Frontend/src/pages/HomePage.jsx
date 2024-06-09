// import React from 'react'
import Nav from './Nav'
import '../css/Homepage.css'
import CountUp from 'react-countup';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
    return (
        <div className=''>
            <Nav />
            <div className="main-contain flex mt-10  flex-col ">
                <div className="abour flex gap-24 justify-center mb-24">
                    <div className="moam mt-16">
                        <img src="1530018548160.jpeg" alt="" className='w-[500px] h-[350px] hover:opacity-90 ' />
                    </div>
                    <div className="aboutdesc mt-14 w-[550px]">
                        <h2 className='text-7xl text-zinc-600 elder'>The Elder Hub</h2>
                        <p className='px-2 py-6 text-zinc-400 text-left'>Elder Haven is a sanctuary for the golden-agers, offering more than just care but a genuine sense of family. At Elder Haven, we extend wholehearted services to the elderly, ensuring they experience a positive transformation in their lives.

                            We commit to providing accommodation, compassionate nursing care, wholesome meals, and a range of amenities to our cherished residents. Our dedicated efforts are focused on crafting a lifestyle for elders that is not only comfortable and safe but also imbued with happiness and dignity. Elder Haven, where your loved ones are not just residents but cherished members of our extended family</p>
                    </div>
                </div>
                <div className="nums mt-1 bg-custom-nav p-20 mb-24">
                    <div className="numItems flex  justify-between">
                        <div className="num-1 flex flex-col gap-2">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/heart-with-pulse--v1.png" alt="heart-with-pulse--v1" />
                            <h1 className='text-6xl text-zinc-600 mt-2'><CountUp start={0} end={5} duration={3} />+</h1>
                            <p className='text-zinc-400 mt-5 text-xl'>Years in Service</p>
                        </div>
                        <div className="num-2 flex flex-col gap-2">
                            <img width="45" height="45" src="https://img.icons8.com/ios-filled/50/caduceus.png" alt="caduceus" />
                            <h1 className='text-6xl text-zinc-600 mt-2'><CountUp start={0} end={100} duration={3} />+</h1>
                            <p className='text-zinc-400 ml-4 text-xl mt-6'>Staff</p>
                        </div>
                        <div className="num-3 flex flex-col gap-2">
                            <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/person-male.png" alt="person-male" className='-mt-3' />
                            <h1 className='text-6xl text-zinc-600 mt-2'><CountUp start={0} end={1200} duration={3} />+</h1>
                            <p className='text-zinc-400 ml-4 text-xl mt-5'>Happy Elders</p>
                        </div>
                        <div className="num-4 flex flex-col gap-2 -mt-3">
                            <img width="60" height="60" src="https://img.icons8.com/external-others-pike-picture/100/external-Donor-organ-others-pike-picture-3.png" alt="external-Donor-organ-others-pike-picture-3 className='-mt-10 bbb'" />
                            <h1 className='text-6xl text-zinc-600 mt-2'><CountUp start={0} end={250} duration={3} />+</h1>
                            <p className='text-zinc-400 ml-4 text-xl mt-6'>Donors</p>
                        </div>

                    </div>
                </div>
                <div className="abour flex gap-24 justify-center mb-24">
                    <div className="aboutdesc mt-14 w-[550px]">
                        <h2 className='text-5xl text-zinc-600 elder ml-2'>Discover a Haven of Comfort and Care at Elder Haven</h2>
                        <p className='px-2 py-10 text-zinc-400 text-left'>Embrace the warmth of Elder Haven, where every day is a celebration of life's golden moments. Our serene and loving environment is tailored to cater to the unique needs of our seniors, ensuring a life filled with companionship, security, and joy. Join us on this journey towards a fulfilling and dignified living. Press the 'Join Vridhashram' button and step into a world that cherishes your well-being and celebrates the beauty of aging gracefully.</p>
                        <div className="flex justify-left ml-2">
                            <Link to='/JoinAshram'><Button className='bg-custom-purple text-white text-xl px-10 py-3 rounded-lg hover:opacity-90 hover:bg-custom-purple'>Join </Button></Link>
                        </div>
                    </div>
                    <div className="moam mt-16">
                        <img src="belasese.jpg" alt="" className='w-[500px] h-[350px] hover:opacity-90 ' />
                    </div>

                </div>
                <div className="mt-1 bg-custom-nav p-20">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-5xl text-center text-zinc-700 mb-9 vv">
                            Support us to provide shelter, food, medical assistance and other necessary care to senior citizens.
                        </h1>
                        <Link to='/donate'><Button className='bg-custom-purple hover:bg-custom-purple'>Donate Now</Button></Link>
                    </div>

                </div>
                <div className="footer bg-customGray p-24 flex justify-between">
                    <div className="part1 flex flex-col gap-3">
                        
                       <div className="eler flex gap-2">
                            <h1 className='text-3xl text-zinc-600'>Elder Hub</h1>
                            <img src='social-care.png' className="w-16 h-16 ml-7 mb-4 " />
                       </div> 
                        <p className='text-zinc-400'>Dollars colony <br />
                            Kuvempu nagara, Davanagere City <br />
                            Bengaluru divsion, Karnataka State <br />
                            ZIP Code: 577004</p>
                    </div>
                    <div className="contact flex flex-col gap-5">

                        <h1 className='text-3xl text-zinc-600'>Contact Us</h1>
                        <div className="contact-details flex flex-col gap-2">
                            <p className='text-zinc-400'>Phone: +1 234 567 8901</p>
                            <p className='text-zinc-400'>Email: contactelderhub@gmail.com</p>
                        </div>
                        <div className="socialicon flex gap-5 mt-4">
                                <div className="fb">
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#145ddb", fontSize: "26px" }} />
                                </div>
                                <div className="tw">
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#19a1f5", fontSize: "26px" }} />
                                </div>
                                <div className="in">
                                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#d714ac", fontSize: "26px" }} />
                                </div>
                            </div>
                    </div>
                    <div className="part-3">
                        <h1 className="text-3xl text-zinc-600">Facilities</h1>
                        <div className="links mt-5">
                            <p className="text-zinc-400">&#62;  Senior-friendly Infrastructure</p>
                            <p className="text-zinc-400">&#62;  Safety & Security</p>
                            <p className="text-zinc-400">&#62;  Health & Medical Assistance</p>
                            <p className="text-zinc-400">&#62;  Daily Care</p>
                        </div>
                    </div>

                    <div className="part3">

                    </div>
                </div>

                {/* <div className="space my-10 invisible">.</div> */}
            </div>

        </div>
    )
}
