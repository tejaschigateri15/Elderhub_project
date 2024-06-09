import { useEffect, useState } from 'react';
import '../css/userdetails.css'
import Nav from './Nav'
import { CircularProgress, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Textarea } from "@/components/ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Checkbox from '@mui/material/Checkbox';
import Select from 'react-select'
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';


export default function Userdetails() {

    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [value, onChange] = useState(new Date());
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [selectedHealthConditions, setSelectedHealthConditions] = useState([]);
    const [diet, setDiet] = useState('');
    const [emergency, setEmergency] = useState('');
    const [consentAgreement, setConsentAgreement] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const healthstatus = selectedHealthConditions.map(option => option.label).join(', ');

    useEffect(() => {
        console.log('hi', value)
        console.log(formattedDate)
        console.log(name, gender, address, phoneno, aadhar, healthstatus, diet, emergency, isChecked, image)
    })


    const uploadimage = async (image) => {
        const formdata = new FormData()
        formdata.append('file', image)
        formdata.append('upload_preset', "xw4yrog1")
        formdata.append('folder', 'ElderHub_userdetails')
        try {
            setIsUploading(true)
            const photo = await axios.post('https://api.cloudinary.com/v1_1/di82vgpbo/image/upload', formdata)
            setImage(photo.data.url)
            image && toast.success('Image is uploaded👍', { duration: 2000 }), setIsUploading(false)
            console.log("url : ", photo.data.url)
        } catch (err) {
            console.log(err)
        }

    }

    const inputDateString = value;
    const inputDate = new Date(inputDateString);

    const day = String(inputDate.getDate()).padStart(2, '0');
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = inputDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },

    ]

    const message_htmls = `
    <div style="background-color:#f2f2f2; padding: 20px; font-family: Arial, sans-serif;">
    <h2 style="color: #1a73e8;">Dear ${name},</h2>
    
    <p style="font-size: 18px;">Thank you for submitting your personal and health details through our online form. We appreciate the time you took to provide us with this information.</p>
    
    <p style="font-size: 18px;"><b>Here is a summary of the details you submitted:</b></p>
    
    <ul style="font-size: 16px; line-height: 1.5; list-style: none;">
      <li><b>Full Name:</b> ${name}</li>
      <li><b>Date of Birth:</b> ${formattedDate}</li>
      <li><b>Gender:</b> ${gender}</li>
      <li><b>Address:</b> ${address}</li>
      <li><b>Phone Number:</b> ${phoneno}</li>
      <li><b>Aadhar Number:</b> ${aadhar}</li>
      <li><b>Health Conditions:</b> ${healthstatus}</li>
      <li><b>Dietary Restrictions/Preferences:</b> ${diet}</li>
      <li><b>Emergency Contact Details:</b> ${emergency}</li>  
    </ul>
    
    <p style="font-size: 16px;">Your consent and agreement to our terms have been noted. We greatly value your trust and look forward to assisting you. If you have any further questions or need additional assistance, please don't hesitate to contact us.</p>
    
    <p style="font-size: 16px;"><b>Contact Us:</b></p> 
    
    <p style="font-size: 16px;">
      Phone: +91 9876543210<br>
      Email: teamElderHub@gmail.com
    </p>
    
    <p style="font-size: 18px;">Thank you again for choosing ElderHub.</p>
    
    <p style="font-size: 18px;">Best regards,<br>ElderHub</p>
    </div>
    `;


    const healthConditionsOptions = [
        { value: 'none', label: 'No Known Health Conditions' },
        { value: 'arthritis', label: 'Arthritis' },
        { value: 'osteoporosis', label: 'Osteoporosis' },
        { value: 'hypertension', label: 'Hypertension (High Blood Pressure)' },
        { value: 'diabetes', label: 'Diabetes' },
        { value: 'heart-disease', label: 'Heart Disease' },
        { value: 'respiratory-conditions', label: 'Respiratory Conditions (e.g., Asthma, COPD)' },
        { value: 'vision-impairment', label: 'Vision Impairment' },
        { value: 'hearing-loss', label: 'Hearing Loss' },
        { value: 'cognitive-impairment', label: 'Cognitive Impairment (e.g., Dementia, Alzheimer\'s)' },
        { value: 'stroke', label: 'Stroke History' },
        { value: 'parkinsons', label: 'Parkinson\'s Disease' },
        { value: 'cancer', label: 'Cancer' },
        { value: 'chronic-pain', label: 'Chronic Pain' },
        { value: 'kidney-disease', label: 'Kidney Disease' },
        { value: 'gastrointestinal-issues', label: 'Gastrointestinal Issues' },
        { value: 'mobility-issues', label: 'Mobility Issues' },
        { value: 'depression', label: 'Depression' },
        { value: 'anxiety', label: 'Anxiety' },
        { value: 'sleep-disorders', label: 'Sleep Disorders' }
    ];

    const templateParams ={
        from_name: "Team ElderHub",
        subject : "Thank You for Submitting Your Details",
        to_name: name,
        to_email: email,    
        message_html: message_htmls,
        
    }

    const userId = 'C2GNdb0mHnfCgReZj';

    emailjs.init(userId);


    const handleSubmit = async () => {
        if (!name || !formattedDate || !gender || !address || !email || !phoneno || !aadhar || !healthstatus || !diet || !emergency || !isChecked) {
            toast.error('Please fill in all required fields.', { duration: 2000 });
            return;
        }
        else {

            const formdata = {
                name: name,
                dob: formattedDate,
                gender: gender,
                address: address,
                email: email,
                phoneno: phoneno,
                aadhar: aadhar,
                healthstatus: healthstatus,
                diet: diet,
                emergency: emergency,
                // isChecked:isChecked,
                image: image
            }
            try {
                const res = await axios.post('http://localhost:8080/student/savedetails', formdata)
                console.log(res.data)
                if (res.status === 200) {
                    toast.success('All the records are saved', { duration: 2000 })
                    await emailjs.send('service_ez2nyt1', 'template_9gbs2an', templateParams)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (error) {
                        console.log('FAILED...', error);
                    });

                }
                else {
                    toast.error('Something went wrong', { duration: 2000 })
                }
            }
            catch (err) {
                console.log(err)
                toast.error('Something went wrong')
            }
        }
    }

    const handleHealthConditionsChange = (selectedOptions) => {
        setSelectedHealthConditions(selectedOptions);
    };

    return (
        <div>
            <Nav />
            <Toaster position="top-center" />
            <div className="maindetails flex px-48 py-24 m-auto justify-between ">
                <div className="userform  mx-24 my-5 flex justify-between gap-48 ">
                    <div className="profile-pic">
                        <div className="imagebox">
                            {image ? <img src={image} alt="" /> : !isUploading ? <div className='imagetextx'><p>Image not selected</p></div> : <div className="spinner"> <CircularProgress style={{ color: '#7856FF' }} /></div>}
                        </div>
                        <div className="imgupl"><label htmlFor="image">Upload  <FontAwesomeIcon icon={faUpload} style={{ color: "#06D240", }} /></label> </div>
                        <div className="uploader">
                            <TextField
                                name="upload-photo"
                                type="file"
                                className="llb"
                                id='image'
                                onChange={(e) => uploadimage(e.target.files[0])}
                            />

                        </div>
                    </div>
                    <div className="profiledetails flex flex-col gap-24">
                        <div className="indohead p-16 border-solid border-4 border-grey-200 rounded-3xl">
                            <h1 className='text-4xl font-bold text-zinc-600 text-center mb-6'>Personal and Health Details</h1>
                            <div className="infoInputs">
                                <div className="grid w-full items-center ">
                                    <div className="flex flex-col gap-4 space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Fullname</Label>
                                        <Input id="name" placeholder="fullname" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2 space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Email</Label>
                                        <Input id="name" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="dob flex flex-col gap-4 space-y-1.5 mt-5">
                                        <Label htmlFor="name ">DOB</Label>
                                        <Calendar onChange={onChange} value={value} />
                                    </div>
                                    <div className="gender flex flex-col gap-2 space-y-1.5 mt-7">
                                        <Label htmlFor="name ">Gender</Label>
                                        <Select options={options} onChange={(selectedOption) => setGender(selectedOption?.value)} />

                                    </div>
                                    <div className="flex flex-col gap-4 space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Address</Label>
                                        <Input id="name" placeholder="Address" required onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-4 space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Phone Number </Label>
                                        <Input id="name" placeholder="Phone no." onChange={(e) => setPhoneno(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col  space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Aadhar Number </Label>
                                        <Input id="name" onChange={(e) => setAadhar(e.target.value)} placeholder="Provide your Aadhar number (e.g., 1234 5678 9012)" />
                                    </div>

                                    <div className="flex flex-col gap-1 space-y-1.5 mt-8">
                                        <Label htmlFor="name ">Health Conditions </Label>
                                        <Select
                                            options={healthConditionsOptions}
                                            isMulti
                                            placeholder="Select Health Conditions"
                                            onChange={handleHealthConditionsChange}
                                        />

                                    </div>

                                    <div className="flex flex-col gap-1 space-y-1.5 mt-8 ">
                                        <Label htmlFor="name ">Any Dietary restrictions or preferences </Label>
                                        <Textarea onChange={(e) => setDiet(e.target.value)} placeholder="Share your dietary needs and preferences here" />


                                    </div>

                                    <div className="flex flex-col gap-1 space-y-1.5 mt-8 ">
                                        <Label htmlFor="name ">Emergency Contact Details </Label>
                                        <Textarea onChange={(e) => setEmergency(e.target.value)} placeholder="Please provide details for your emergency contact person, including their name, relationship, and phone number" />
                                    </div>
                                    <div className="flex items-start mt-8 mb-8">
                                        <div className="checkboxx mr-2 mt-3">
                                            <Checkbox
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                                required
                                            />
                                        </div>
                                        <div className="accrr">
                                            <Accordion type="single" collapsible>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>Consent and Agreement:</AccordionTrigger>
                                                    <AccordionContent>
                                                        Certainly! Here's a simplified version:
                                                        "I agree to the terms and conditions of Elder Hub:
                                                        I understand the rules and expectations for my stay.
                                                        I've received information about services and responsibilities.
                                                        My personal info will be handled as per privacy policies.
                                                        I may need to provide additional documents for admission.
                                                        I'll follow the established rules and policies.
                                                        I'm making this decision voluntarily and have had a chance to ask questions. By checking this box, I affirm that I've read and understood the terms."
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>

                                    <Button onClick={handleSubmit}>Submit</Button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
