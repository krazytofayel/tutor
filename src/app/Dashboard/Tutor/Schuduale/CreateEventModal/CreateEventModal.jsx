import React from 'react'
import { DatePicker, Input, Modal } from 'antd';
const CreateEventModal = ({ showModal,visible,onOk,onCancel }) => {
  return (
<>

{showModal && (
  <Modal
  title="Create Event"
 
  onOk={handleModalOk}
  onCancel={handleModalCancel}
>
  {/* <DatePicker defaultValue={moment(modalData.start)} disabled /> */}
  <Input
    placeholder="Event Title"
    onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
  />
  {/* Other inputs for event details (body message, end time, etc.) */}
</Modal>

)}

</>
  )
}

export default CreateEventModal
