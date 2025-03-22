import { Label, Radio, TextInput, Card } from 'flowbite-react';

const ActivityDetails = ({ eventData, setEventData }: any) => {
  const handleRadioChange = (event: { target: { value: string } }) => {
    setEventData({ ...eventData, type: event.target.value });
  };

  const handleInputChange = (event: { target: { name: string; value: any } }) => {
    setEventData({ ...eventData, [event.target.name]: event.target.value });
  };

  return (
    <Card className="p-6 shadow-md">
      <h5 className="text-lg font-semibold mb-4">Date & Time</h5>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="mb-4">
          <Label htmlFor="startDate" value="Start Date" className="font-medium" />
          <TextInput
            id="startDate"
            type="date"
            name="startDate"
            value={eventData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="endDate" value="End Date" className="font-medium" />
          <TextInput
            id="endDate"
            type="date"
            name="endDate"
            value={eventData.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="startTime" value="Opening Time" className="font-medium" />
          <TextInput
            id="startTime"
            type="time"
            name="startTime"
            value={eventData.startTime}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="endTime" value="Closing Time" className="font-medium" />
          <TextInput
            id="endTime"
            type="time"
            name="endTime"
            value={eventData.endTime}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default ActivityDetails;
