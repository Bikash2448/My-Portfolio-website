// import React, { useState } from "react";
// import "../Registration/login.css" // For custom styles

// const Login = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(formData);
//       // Add form submission logic here
//     };

//   return (

//     <div className="p-6 mt-8 px-12  bg-gray-400 min-h-screen">
//       <h1 className="text-5xl font-serif md:text-center font-bold text-violet-900 mb-4">Love to hear from you</h1>
//       <p className="mb-8 text-xl font-semibold text-gray-600">Feel free to contact me. i will get back to you as soon as i can.</p>
//       <div className="flex flex-col w-full lg:flex-row justify-center item-center gap-8">

//           <div className="w-full lg:w-2/3 p-4 bg-gray-600 shadow-lg rounded-lg">
//             <form onSubmit={handleSubmit}>
//               <div className="flex flex-col w-full sm:flex-row gap-4 mb-4">
//                 <div className="flex-1 w-full">
//                   <label className="block mb-1 font-bold">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block mb-1 font-bold">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-1 font-bold">Mobile No</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2 "
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-1 font-bold">Message</label>
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full p-2 border bg-slate-600 rounded-md h-32 focus:outline-none focus:ring-2 "
//                 />
//               </div>

//               <div className="flex justify-end px-6 my-3">
//                 <button
//                   type="submit"
//                   aria-label="Submit"
//                   className="bg-violet-900 text-white px-12 py-2 rounded-md hover:bg-violet-950 transition"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For showing status messages
  const [success, setSuccess] = useState(null); // New: Track success or failure
  const [loading, setLoading] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");
    setLoading(true);
    setSuccess(null); // Reset success state

    try {
      const response = await fetch("https://my-portfolio-backend-ucp7.onrender.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setStatus("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Clear form
      } else {
        setSuccess(false);
        setStatus(`❌ Failed to send message: ${data.message}`);
      }
    } catch (error) {
      setSuccess(false);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mt-8 px-12 bg-gray-400 min-h-screen">
      <h1 className="text-5xl font-serif md:text-center font-bold text-violet-900 mb-4">
        Love to hear from you
      </h1>
      <p className="mb-8 text-xl md:text-center font-semibold text-gray-600">
        Feel free to contact me. I will get back to you as soon as I can.
      </p>

      <div className="flex flex-col w-full lg:flex-row justify-center item-center gap-8">
        <div className="w-full lg:w-2/3 p-4 bg-gray-600 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full sm:flex-row gap-4 mb-4">
              <div className="flex-1 w-full">
                <label className="block mb-1 font-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Mobile No</label>
              <input
                type="text"
                name="mobile"
                placeholder="Your Mobile No"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border bg-slate-600 rounded-md focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-bold">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border bg-slate-600 rounded-md h-32 focus:outline-none focus:ring-2"
                required
              />
            </div>

            <div className="flex justify-end px-6 my-3">
              <button
                type="submit"
                aria-label="Submit"
                className="bg-violet-900 text-white px-12 py-2 rounded-md hover:bg-violet-950 transition disabled:bg-gray-500"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Status Message Display */}
          {status && (
            <div
              className={`mt-4 p-3 rounded-md text-center ${
                success === true
                  ? "bg-green-600 text-white"
                  : success === false
                  ? "bg-red-600 text-white"
                  : "hidden"
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;