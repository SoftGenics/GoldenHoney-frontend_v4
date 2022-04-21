import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

const FloatingWhatsapp = () => {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="9318818893"
        accountName="GOLDEN HONEY"
        allowClickAway
        avatar='/images/dp.png'
        notification
        notificationDelay={60000} // 1 minute
      />
  
    </div>
  )
}

export default FloatingWhatsapp