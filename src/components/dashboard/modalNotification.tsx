import React from 'react'

const ModalNotification = () => {
  return (
    <div>
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
      <p className="font-semibold text-sm mb-2">Notifications</p>
      <ul className="text-xs text-gray-600 space-y-2">
        <li className="hover:bg-gray-100 p-2 rounded">
          📩 New message from Admin
        </li>
        <li className="hover:bg-gray-100 p-2 rounded">
          📅 Event reminder tomorrow
        </li>
        <li className="hover:bg-gray-100 p-2 rounded">
          ⭐ You earned a new badge
        </li>
      </ul>
    </div>
    </div>
  )
}

export default ModalNotification
