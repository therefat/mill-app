import React, { useState } from 'react'
import { db } from '../firebase.config'
import { collection, addDoc,Timestamp } from 'firebase/firestore';
import { set } from 'firebase/database';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBalance() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const [balance, setBalance] = useState('');
  const [id,setID] = useState('')
  const user = localStorage.getItem('user')
  const handleModalToggle = () => {
    if(!user){
      toast.error(' Please Login', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
      return 
    }
    setIsModalOpen(!isModalOpen);
  };
  // console.log()
  let dateTime = Timestamp.now();
  const handleUpload = async (e) => {
    try {
      const docRef = await addDoc(collection(db, 'balance'), {
        time,
        details,
        dateTime,
        balance,
        id
         // You can add a timestamp
      });
      console.log('Document written with ID: ');
      setIsModalOpen(false)
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  return (
    <div>
    <button
      onClick={handleModalToggle}
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Add Balance
    </button>

    {isModalOpen && (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleModalToggle}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#" onSubmit={(e) => { e.preventDefault(); handleUpload(); }}>
              <div>
                  <label
                    htmlFor="id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter ID
                  </label>
                  <input
                    type="number"
                    name="id"
                    id="id"
                    value={id} 
                    onChange={(e) => setID(e.target.value)}
                    placeholder="Enter ID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Add Date
                  </label>
                  <input
                    type="date"
                    name="time"
                    id="time"
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Details
                  </label>
                  <input
                    type="text"
                    value={details} 
                    onChange={(e) => setDetails(e.target.value)}
                    name="details"
                    id="details"
                    placeholder="Enter Details"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="balance"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter balance
                  </label>
                  <input
                    type="number"
                    name="balance"
                    id="balance"
                    value={balance} 
                    onChange={(e) => setBalance(e.target.value)}
                    placeholder="Enter balance"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default AddBalance