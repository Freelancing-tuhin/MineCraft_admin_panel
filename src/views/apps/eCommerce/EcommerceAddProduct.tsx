import GeneralDetail from 'src/components/apps/ecommerce/addProduct/GeneralDetail';
import Pricing from 'src/components/apps/ecommerce/addProduct/Pricing';
import ProductData from 'src/components/apps/ecommerce/addProduct/ProductData';
import Status from 'src/components/apps/ecommerce/addProduct/Status';
import Variation from 'src/components/apps/ecommerce/addProduct/Variation';
import Thumbnail from 'src/components/apps/ecommerce/editProduct/Thumbnail';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import { Button } from 'flowbite-react';
import { useContext, useState } from 'react';
import { createEvent, CreateEventPayload } from 'src/service/createEvent';
import { useNavigate } from 'react-router';
import { AuthContext } from 'src/context/authContext/AuthContext';
import LockScreen from 'src/views/authentication/lockScreen/LockScreen';
import AdditionalDetails from 'src/components/apps/ecommerce/addProduct/AdditionalDetails';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Add Event',
  },
];

const AddProduct = () => {
  const { user }: any = useContext(AuthContext);
  const [eventData, setEventData] = useState({
    title: '',
    category: '',
    type: '',
    startDate: '',
    startTime: '',
    endTime: '',
    location: {
      address: '',
      latitude: 0,
      longitude: 0,
    },
    description: '',
    // ticketName: '',
    // ticketPrice: 0,
    tickets: [],
    organizerId: user?._id,
    amenities: '',
    locationDescription: '',
    eventRules: '',
  });
  const navigate = useNavigate();
  const [banner, setBanner] = useState<string | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleBannerChange = (file: File) => {
    setBannerFile(file); // Store actual file
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bannerFile) {
      alert('Please upload a banner image');
      return;
    }

    const eventPayload: CreateEventPayload = {
      ...eventData,
      bannerImage: bannerFile,
    };

    console.log('Submitting event:', eventPayload);
    await createEvent(eventPayload);
    // navigate('/Event/list');
  };

  return (
    <>
      <LockScreen />
      <BreadcrumbComp title="Add Event" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-8 col-span-12">
          <div className="flex flex-col gap-[30px]">
            {/* General */}
            <GeneralDetail
              title={eventData.title}
              description={eventData.description}
              handleChange={handleChange}
              locationDescription={eventData.locationDescription}
            />
            <Variation eventData={eventData} setEventData={setEventData} />
            <Pricing eventData={eventData} setEventData={setEventData} />
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="flex flex-col gap-[30px]">
            <Thumbnail onBannerChange={handleBannerChange} setBanner={setBanner} banner={banner} />
            <Status eventData={eventData} setEventData={setEventData} />
            <ProductData eventData={eventData} setEventData={setEventData} />
            <AdditionalDetails
              amenities={eventData.amenities}
              eventRules={eventData.eventRules}
              handleChange={handleChange}
              handleAmenitiesChange={(selectedAmenities) =>
                setEventData((prevData) => ({
                  ...prevData,
                  amenities: selectedAmenities.join(', '), // Convert array to comma-separated string
                }))
              }
            />
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <div className="sm:flex gap-3">
            <Button color={'primary'} className="sm:mb-0 mb-3 w-fit" onClick={handleSubmit}>
              Save changes
            </Button>
            <Button color={'lighterror'} className="w-fit">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
