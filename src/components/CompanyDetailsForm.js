import React, { useState } from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  export default function InputFields() {
    const initialFormData = {
     businessName: "",
     businessPhoneNumber: "",
     alternativeNumber:"",
     abouttheBusiness:"",
     workEmail: "",
     alternativeEmail:"",
     businessWebsite:"",
     location:"",
     anotherLocation:"",
     }
    const [formData, setFormData] = useState(initialFormData);
     
      const [errors, setErrors] = useState({});
      const [isDataSaved, setIsDataSaved] = useState(false);
      const [showAlternativeNumber, setShowAlternativeNumber] = useState(false);
      const [showAlternativeEmail, setShowAlternativeEmail] = useState(false);
      const [showAlternativeLocation, setShowAlternativeLocation] = useState(false);
      const [message, setMessage] = useState('');
      const saveData = () => {
        if (formData) {
          setMessage('Data saved successfully!');
        } else {
          setMessage('Error saving data.');
        }
        setTimeout(() => {
          setIsDataSaved(true);
          setFormData(initialFormData);
          setTimeout(() => {
            setIsDataSaved(false);
          }, 2000);
        }, 2000); 
      };
      const handleSaveClick = () => {
        saveData();

      };
      const handleCancel = () => {
        setFormData(initialFormData);

      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const validateForm = () => {
        const phoneNumberRegex = /^[0-9]{10}$/    ;
        const newErrors = {};
    
        // Validate username
        if (formData.businessName?.trim() === '') {
          newErrors.businessName = 'Business Name is required';
        }
        // Validate PhoneNumber
        if(!phoneNumberRegex.test(formData.businessPhoneNumber)){
            newErrors.businessPhoneNumber = "Please enter a valid 10-digit phone number"
            
        }
    
        // Validate email
        if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
          newErrors.workEmail = 'Invalid email address';
        }
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0; 
      };  

      
  const toggleAlternativeNumber = () => {
    setShowAlternativeNumber(!showAlternativeNumber);
    // Optionally, you can reset the alternative number when hiding the input field
    if (!showAlternativeNumber) {
      setFormData("");
    }
  };
  const toggleAlternativeEmail = () => {
    setShowAlternativeEmail(!showAlternativeEmail);
    // Optionally, you can reset the alternative number when hiding the input field
    if (!showAlternativeEmail) {
      setFormData("");
    }
  };

  const toggleAlternativeLocation = () => {
    setShowAlternativeLocation(!showAlternativeLocation);
    // Optionally, you can reset the alternative number when hiding the input field
    if (!showAlternativeLocation) {
      setFormData("");
    }
  };

      const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
        setIsDataSaved(true)
        if (validateForm()) {
          console.log('Form submitted:', formData);
          // Perform form submission logic here (e.g., send data to server)
        } else {
          console.log('Form validation failed');
        }
        
      };
      const isFormValid = formData.businessName !== '' && formData.businessPhoneNumber !== ''  && formData.abouttheBusiness !== '' && formData.workEmail !== ''  && formData.businessWebsite !== '' && formData.location  !== '';

    
    return ( 
       <div>    
        <Card color="transparent" shadow={false}>
        <form className="mt-8  mb-2 w-full  max-w-screen-lg sm:w-100" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-6 items-start justify-evenly justify-items-stretch"> 
            <div className="grid grid-cols-1 gap-6  ">
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-sm">
            Business Name       
            </Typography>       
            <Input
              size="lg"
              type="text"
              name="businessName"
              value={formData.businessName}
              placeholder="Admire Holidays"
              className=" block w-full h-12 rounded-md p-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
            {errors.businessName && <p className="text-red-500 text-xs ">{errors.businessName}</p>}  
            
            <Typography variant="h6" color="blue-gray" className=" mt-3 text-sm">
            Business Phone Number
            </Typography>
            <Input
              size="lg"
              maxLength={10}
              type="number"
              name="businessPhoneNumber"
              value={formData.businessPhoneNumber}
              placeholder="+91 2345678910"
              className=" block w-full rounded-md h-12 pl-3 bg-gray-100 -mt-3 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
            />
             {errors.businessPhoneNumber && <p className="text-red-500 text-xs">{errors.businessPhoneNumber}</p>}
            
        {showAlternativeNumber ? (
           <Input  
           type="number"
           name="alternativeNumber"
           size="lg"
           maxLength={10}
           value={formData.alternativeNumber}
           placeholder="Enter your alternative number"
           className=" block w-full rounded-md h-12 pl-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
         onChange={handleChange}
         />
        ) : null}       
        <p  
          type="text"
          onClick={toggleAlternativeNumber}
          className=" text-blue-600 font-medium text-sm  -mt-4 rounded focus:outline-none"
        >
          {showAlternativeNumber ? 'hide' : '+ add alternative phone numbers'}
        </p> 
      
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-sm">
            About The Business
            </Typography>
            <Textarea
              type="text"
              size="lg"
              name="abouttheBusiness"
              value={formData.abouttheBusiness}
              placeholder="Write a brief intro about your business"
              className=" block w-full h-12 p-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }} 
              onChange={handleChange}
              /> 
            </div>
            <div className="grid grid-cols-1 gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-sm">
            Work Email
            </Typography>
            <Input  
              type="email"
              name="workEmail"
              size="lg"
              value={formData.workEmail}
              placeholder="jk.97@gmail.com"
              className=" block w-full h-12 pl-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            onChange={handleChange}
            />
            {errors.workEmail &&  <p className="text-red-500 text-xs ">{errors.workEmail}</p>}
            
        {showAlternativeEmail ? (
           <Input  
           type="email"
           name="alternativeEmail"
           size="lg"
           value={formData.alternativeEmail}
           placeholder="Enter your alternative Email Id"
           className=" block w-full rounded-md h-12 pl-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
         onChange={handleChange}
         />
        ) : null}       
        <p  
          type="text"
          onClick={toggleAlternativeEmail}
          className=" text-blue-600 font-medium text-sm -mt-5 rounded focus:outline-none"
        >
          {showAlternativeEmail ? 'hide' : '+ add alternative email IDs'}
        </p> 
            <Typography variant="h6" color="blue-gray" className=" -mt-2 text-sm">
            Business Website
            </Typography>
            <Input
              type="text"
              size="lg"
              name="businessWebsite"
              value={formData.businessWebsite}
              placeholder="Add your business website"
              className=" block w-full h-12 pl-3 rounded-md bg-gray-100 -mt-4 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            onChange={handleChange}
            />
            
            <Typography variant="h6" color="blue-gray" className="mt-8 text-sm">
            Location
            </Typography>
            <Input
              type="text"
              size="lg"
              name="location"
              value={formData?.location}
              placeholder="Select your location"
              className=" block w-full h-12 pl-3 rounded-md bg-gray-100 -mt-4 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
               onChange={handleChange}
            />
        {showAlternativeLocation ? (
           <Input  
           type="text"
           name="anotherLocation"       
           size="lg"
           value={formData.anotherLocation}
           placeholder="Enter your location"
           className=" block w-full h-12 pl-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
         onChange={handleChange}
         />
        ) : null}       
        <p  
          type="text"
          onClick={toggleAlternativeLocation}
          className=" text-blue-600 font-medium text-sm  -mt-4 rounded focus:outline-none"
        >
          {showAlternativeLocation ? 'hide' : '+ add another address'} 
        </p> 
            </div>          
            </div>
            <div className="flex justify-center w-100  space-x-12 ">
          <Button onClick={handleCancel} className="border-2 w-32 h-12 pl-3 rounded-md mt-6 border-blue-400 focus:!border-blue-900 bg-white-600 text-blue-400">
            Cancel
          </Button>
          <Button   onClick={handleSaveClick} type="submit" name="submit" className=" text-sm border-2 w-32 rounded-md mt-6 focus:!border-blue-900 bg-[#1da1f2] text-white" >
            Save
          </Button>
          {isDataSaved && isFormValid && message &&  (
        <div className="mt-4 p-2 bg-green-200 h-12 pl-3 border border-green-500 text-green-800 text-sm rounded">
          Company Details Data saved successfully!
        </div>
      )}    
          </div>
        </form>
      </Card>
    </div>
    );
  }