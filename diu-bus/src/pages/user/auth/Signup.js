import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { createSignUp } from '../../state/user/signupSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const Signup = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [agree, setAgree] = useState(false);
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const { name, email, password } = user;
//   const registerSubmit = (e) => {
//     e.preventDefault();
//     const myForm = new FormData();
//     myForm.set("name", name);
//     myForm.set("email", email);
//     myForm.set("password", password);
//     dispatch(createSignUp(myForm));
//     toast.success('Please Verify Your Email', 
//     );
//   };
//   const registerDataChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };
 
  return (
    <div>

      <div className="mt-5 lg:mt-0 flex flex-col items-center justify-center min-h-screen ">
        <div className="lg:w-3/12 ">
         
          <form action="" className="space-y-6 py-6 ">
            <div>
              <input
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-400 focus:invalid:outline-none"
                type="text"
                name="name"
                // value={name}
                // onChange={registerDataChange}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <input
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-400 focus:invalid:outline-none"
                type="email"
                name="email"
                // value={email}
                // onChange={registerDataChange}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="flex flex-col items-end">
              <input
                className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-400 focus:invalid:outline-none"
                name="password"
                // value={password}
                // onChange={registerDataChange}
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-4 w-4 text-violet-700 focus:ring-violet-700 border-gray-300 rounded"
                //   checked={agree}
                //   onChange={(e) => setAgree(e.target.checked)}
                  required
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Agreed with the terms and condition
                </label>
              </div>
            </div>
            <div>
              <button className="w-full px-6 py-3 rounded-xl bg-green-600 mb-5">
                <span className="font-semibold text-white text-lg">Signup</span>
              </button>
              <span className="text-sm tracking-wide text-gray-400 mt-5">Already have a account ?</span> <Link to="/user-signin"><span className="text-violet-700">Please Login</span>
              </Link>
            </div>
            {/* {
              error !== '' && <Error message={error}></Error>
            } */}
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
