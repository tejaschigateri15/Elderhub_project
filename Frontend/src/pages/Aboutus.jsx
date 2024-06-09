import React from 'react'
import Nav from './Nav'
import '../css/aboutus.css'
import { Gallery } from "react-grid-gallery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Aboutus() {

    const images = [
        {
            src: "shubhodaya-old-age-home-bannerghatta-road-bangalore-institutions-for-aged-9rck17wc9x.avif",
            width: 320,
            height: 174,
            isSelected: true,

        },
        {
            src: "oldagemang.jpg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "8.jpg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "GuruVishramVridhAshram-Delhi-DL.jpeg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "oldage.jpg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "Freedom.jpg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "iStock-1205057589.jpg",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "836844-jivan-sandhya-old-age-home.avif",
            width: 320,
            height: 174,
            // isSelected: true,

        },
        {
            src: "1530018548160.jpeg",
            width: 320,
            height: 174,
            // isSelected: true,

        }
    ]


    return (
        <div className=''>
            <Nav />
            <div className="mainabout ">
                <div className="abour flex gap-24   ">
                    <div className="moam relative">
                        <img src="snehlayas-cover.jpg" alt="" className='bb w-screen h-[600px]  p-12 contrast-50' />
                        <div className="centertext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <p className=" text-5xl pp">At ElderHub, we believe in empowering elders to live their golden years with ageless bliss and vibrant joy</p>
                        </div>
                    </div>

                    {/* <div className="aboutdesc mt-14 w-[550px]">
                        <h2 className='text-7xl text-zinc-600 elder'>The Elder Hub</h2>
                        <p className='px-2 py-6 text-zinc-400 text-left'>Elder Haven is a sanctuary for the golden-agers, offering more than just care but a genuine sense of family. At Elder Haven, we extend wholehearted services to the elderly, ensuring they experience a positive transformation in their lives.

                            We commit to providing accommodation, compassionate nursing care, wholesome meals, and a range of amenities to our cherished residents. Our dedicated efforts are focused on crafting a lifestyle for elders that is not only comfortable and safe but also imbued with happiness and dignity. Elder Haven, where your loved ones are not just residents but cherished members of our extended family</p>
                    </div> */}

                </div>
                <div className="miss">
                    <div className="mission text-center text-5xl text-custom-blue mt-10"><p>Mission</p></div>
                    <div className="missioncards flex justify-center gap-28 px-28 py-16">
                        <div className="card1">
                            <div className="test1v bg-white p-8 rounded-lg shadow-md">
                                <div className="testimg mb-4"><img src="prestige.png" alt="Mrs. Anjali Sharma" className="w-24 h-24 object-cover rounded-full" /></div>
                                <div className="testnames1 text-2xl font-bold mb-2 ">Dignity</div>
                                <div className="testdesc text-gray-600">
                                    <p>Emphasizing the importance of providing a dignified and respectful environment for the elderly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card1">
                            <div className="test1v bg-white p-8 rounded-lg shadow-md">
                                <div className="testimg mb-4"><img src="compassion.png" alt="Mrs. Anjali Sharma" className="w-24 h-24 object-cover rounded-full" /></div>
                                <div className="testnames2 text-2xl font-bold mb-2">Compassion</div>
                                <div className="testdesc text-gray-600">
                                    <p className=''>Highlighting the commitment to compassionate care and understanding the unique needs of each individual.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card1">
                            <div className="test1v bg-white p-8 rounded-lg shadow-md">
                                <div className="testimg mb-4"><img src="punch.png" alt="Mrs. Anjali Sharma" className="w-24 h-24 object-cover rounded-full" /></div>
                                <div className="testnames3 text-2xl font-bold mb-2">Empowerment</div>
                                <div className="testdesc text-gray-600">
                                    <p className=''>Focusing on empowering the elderly to live fulfilling lives, making choices, and actively participating in the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="gallery   mt-28 mb-28">
                    <div className="galhead"><h1 className='text-5xl ss'>Gallery</h1></div>
                    <div className="galleryitems flex px-10">
                        <div className="gallery-container">
                            {images.map((image, index) => (
                                <div key={index} className={`gallery-item ${image.isSelected ? 'selected' : ''}`}>
                                    <img src={image.src} alt={image.caption} />
                                    {/* <div className="caption">{image.caption}</div> */}
                                </div>
                            ))}
                        </div>
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
                            <p className='text-zinc-400'>Email: teamElderHub@gmail.com</p>
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
            </div>
        </div>
    )
}
