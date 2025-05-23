import { Label, TextInput, Checkbox } from 'flowbite-react';
import CardBox from 'src/components/shared/CardBox';

interface AdditionalDetailsProps {
  amenities: string;
  eventRules: string;
  home_truths: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleAmenitiesChange: (selectedOptions: string[]) => void;
}

const AMENITIES_OPTIONS = [
  'Lighting',
  'Toilets',
  'Basement',
  'Wheelchair accessible',
  'Wifi',
  'Parking',
];

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  amenities,
  eventRules,
  handleChange,
  handleAmenitiesChange,
  home_truths,
}) => {
  const selectedAmenities = amenities ? amenities.split(', ') : [];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedAmenities = checked
      ? [...selectedAmenities, value]
      : selectedAmenities.filter((item) => item !== value);

    handleAmenitiesChange(updatedAmenities);
  };

  return (
    <CardBox>
      <h5 className="card-title mb-4 font-semibold text-lg">Additional Details</h5>

      {/* Amenities - Checkbox Selection */}
      <div className="mb-4">
        <Label className="block text-sm font-medium text-gray-900 dark:text-white">Amenities</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {AMENITIES_OPTIONS.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2">
              <Checkbox
                value={amenity}
                checked={selectedAmenities.includes(amenity)}
                onChange={handleCheckboxChange}
                className="rounded-sm"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Event Rules Input */}
      <div className="mb-4">
        <Label
          htmlFor="eventRules"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Rules
        </Label>
        <TextInput
          id="eventRules"
          name="space_rules"
          type="text"
          value={eventRules}
          sizing="lg"
          onChange={handleChange}
          className="form-control mt-1"
          placeholder="Event Rules"
        />
      </div>
      <div className="mb-4">
        <Label
          htmlFor="home_truths"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Home Truths
        </Label>
        <TextInput
          id="home_truths"
          name="home_truths"
          type="text"
          value={home_truths}
          sizing="lg"
          onChange={handleChange}
          className="form-control mt-1"
          placeholder="Event Rules"
        />
      </div>
    </CardBox>
  );
};

export default AdditionalDetails;
