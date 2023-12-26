'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modals from './HelperComponent/MessageModal/Modals';
const MessageTutor = () => {
  const [alerts, setAlerts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchInitialAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/message');
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchInitialAlerts();
  }, []);

  const hideAlert = (alertId) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, visible: false } : alert
      )
    );
  };


  const handleViewMore = () => {
    //console.log('click ok')

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>



      {alerts.map((alert) => (
        alert.visible && (
          <div
            key={alert.id}
            className={`p-4 mb-4 text-${alert.color}-800 border border-${alert.color}-300 rounded-lg bg-${alert.color}-50 dark:bg-gray-800 dark:text-${alert.color}-400 dark:border-${alert.color}-800`}
            role="alert"
          >
            <div className="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">This is a danger alert</h3>

            </div>
            <div class="mt-2 mb-4 text-sm">
              More info about this info danger goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
            </div>
            <div class="flex">
              <button
                type="button"
                onClick={() => handleViewMore()}
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className={`text-white bg-[#2c6777] hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
              >
                <svg
                  className="me-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                View more
              </button>
              <button
                type="button"
                onClick={() => hideAlert(alert.id)}
                className={`text-${alert.color}-800 bg-transparent border border-${alert.color}-800 hover:bg-${alert.color}-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-${alert.color}-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center dark:hover:bg-${alert.color}-600 dark:border-${alert.color}-600 dark:text-${alert.color}-400 dark:hover:text-white dark:focus:ring-${alert.color}-800`}
                aria-label="Close"
              >
                Dismiss
              </button>
            </div>
          </div>
        )
      ))}
      {isModalOpen &&  (
        <Modals
          closeModal={closeModal}
          dataModalTarget="default-modal"
          dataModalToggle="default-modal"
          
        />
      )}







    </>
  )
}

export default MessageTutor
