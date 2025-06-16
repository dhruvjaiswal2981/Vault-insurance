import React, { useState } from 'react';
import { submitContactForm } from '../api/contactApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    type = 'button',
    className = '',
    ...props
  }) => {
    const baseClasses =
      'font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

    const variants = {
      primary:
        'bg-gradient-to-r from-[#39b2ff] to-[#c465ea] text-white hover:brightness-110 focus:ring-[#c465ea]',
      secondary:
        'bg-white text-[#4fb6f8] border border-white hover:bg-gray-50',
      outline:
        'border-2 border-[#3db1ff] text-transparent bg-clip-text bg-gradient-to-r from-[#3db1ff] to-[#c366eb] hover:bg-white hover:text-[#3db1ff] focus:ring-[#3db1ff]',
      ghost:
        'bg-transparent text-white border-2 border-transparent hover:border-white',
    };

    const sizes = {
      small: 'px-4 py-2 text-sm h-10',
      medium: 'px-6 py-3 text-base h-12',
      large: 'px-8 py-4 text-lg h-16',
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
      disabled ? 'cursor-not-allowed opacity-50' : ''
    } ${className}`;

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  };


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    helpWith: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await submitContactForm(formData);

      if (res.success) {
        toast.success('🎉 Your message submitted successfully! Our team will contact you shortly.', {
              className: 'bg-green-50 text-green-800 rounded-md shadow-md border border-green-200 px-4 py-2 font-medium',
              icon: '✅'
            });
        setTimeout(() => window.location.reload(), 3000);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          helpWith: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
        console.error('Quote submission failed:', err);
        toast.error('❌ Oops! Submission failed. Please try again.', {
          className: 'bg-red-50 text-red-800 rounded-md shadow-md border border-red-200 px-4 py-2 font-medium',
          icon: '⚠️'
        });
    }
  };


  return (
  <section id="contact-form" className="bg-[#f4f8fb] py-20 rounded-[30px] m-5">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-10 relative bg-[#f4f8fb] rounded-[30px]">
      
      {/* Left Side - Form */}
      <div className="z-10">
        <h2 className="text-4xl font-semibold text-[#22272b] mb-10">Contact us</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[15px] text-[#596069] mb-2">first name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white border border-[#d9dde1] rounded-[16px] text-base focus:outline-none focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-[15px] text-[#596069] mb-2">last name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white border border-[#d9dde1] rounded-[16px] text-base focus:outline-none focus:border-blue-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[15px] text-[#596069] mb-2">phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white border border-[#d9dde1] rounded-[16px] text-base focus:outline-none focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-[15px] text-[#596069] mb-2">how can we help you?*</label>
              <input
                type="text"
                name="helpWith"
                value={formData.helpWith}
                onChange={handleInputChange}
                className="w-full h-14 px-4 bg-white border border-[#d9dde1] rounded-[16px] text-base focus:outline-none focus:border-blue-300"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[15px] text-[#596069] mb-2">message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 bg-white border border-[#d9dde1] rounded-[16px] text-base focus:outline-none focus:border-blue-300 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="primary" size="small" className="w-[180px] h-14 rounded-[16px] text-lg">
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="absolute left-140 flex justify-end md:my-3">
        <img
          src="/images/Waving-hand.png"
          alt="Vault Insurance Hero"
          className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] h-auto"
        />
      </div>

    </div>
  </div>
  
  <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

</section>

  );
};

export default Contact;