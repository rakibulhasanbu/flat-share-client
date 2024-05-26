'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { config } from "@/config";
import { toast } from "react-toastify";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useAddFlatMutation } from "@/app/states/features/flat/flatApi";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import AppLoading from "@/app/components/ui/AppLoading";
import AppFormInput from "@/app/components/ui/AppFormInput";

type TInputs = {
  location: string;
  description: string;
  amount: string;
  squareFeet: string;
  amenities: string;
  advanceAmount: string;
  totalRooms: string;
  totalBedrooms: string;
};

const AddFlat = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const [addFlat, { isLoading }] = useAddFlatMutation();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const updateAmenities = data?.amenities.split(/\s*,\s*/);

    const submitData = {
      ...data, photos, amenities: updateAmenities
    }
    console.log(submitData);
    await addFlat(submitData).unwrap().then((res: { success: any; message: any; }) => {
      console.log(res);
      toast.success("Blog are added successfully!", { toastId: 1 });
      router.push('/');
    }).catch((res: { success: any; message: any; }) => {
      console.log(res);
      toast.error(res.message || "Something went wrong", { toastId: 1 });
    });
  };

  const handleImageUpload = async (value: any) => {
    setLoading(true);
    if (photos.length >= 6) {
      setLoading(false);
      return toast.error("You cannot upload more than 6 photos!", { toastId: 1 });
    }

    const formData = new FormData();
    const maxSizeInBytes = 2 * 1024 * 1024;

    if (value?.size && value?.size > maxSizeInBytes) {
      setLoading(false);
      return toast.error("Your file was more than 2 Megabyte!", { toastId: 1 });
    }

    formData.append("image", value);
    if (formData) {
      const url = `https://api.imgbb.com/1/upload?key=${config?.imgToken}`
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (imgData: any) => {
          if (imgData?.success) {
            setPhotos((prevPhotos) => [...prevPhotos, imgData?.data?.url]);
            setLoading(false);
          }
        }).catch((err) => {
          toast.error("Photo upload Unsuccessful!");
          setLoading(false);
        })
    }
  };

  const handleImageDelete = (id: string) => {
    if (photos) {
      const restImage = photos?.filter(img => img !== id);
      setPhotos(restImage);
    }
  }

  return (
    <>
      <Link
        href={"/dashboard/blogs"}
        className="text-xl 2xl:text-2xl w-fit font-medium text-[#343A40] flex items-center gap-2"
      >
        <div className="rounded-full bg-[#F8F8F8] flex items-center justify-center size-10 lg:size-12">
          <IoArrowBackOutline />
        </div>
        <h2>Go Back</h2>
      </Link>

      {
        isLoading ? <AppLoading />
          :
          <div className="bg-[#F8F8F8] p-3 md:p-4 rounded-2xl mt-4">
            <h1 className="md:text-xl font-medium">Add New Flat</h1>
            <form className="space-y-2 md:space-y-4 pt-4 pb-2" onSubmit={handleSubmit(onSubmit)}>

              <div className='flex items-center justify-center py-6'>
                {
                  loading ?
                    <div className='w-40 md:w-64 h-32 md:h-52 border px-6 bg-white rounded-md shadow flex items-center justify-center'>
                      <AiOutlineLoading3Quarters className="animate-spin text-black text-7xl" />
                    </div>
                    :
                    <label htmlFor="imgUpload">
                      <img className="w-40 md:w-64 h-32 md:h-52 border px-6 bg-white rounded-md shadow cursor-pointer" src="https://static.thenounproject.com/png/2413564-200.png" alt="" />
                    </label>
                }

                <input
                  id="imgUpload"
                  onChange={(e) =>
                    handleImageUpload(e.target.files && e.target.files[0])
                  }
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <div className='flex flex-wrap items-center justify-center gap-5 max-h-40'>
                {
                  photos?.map((img, index) => (
                    <div key={index} className='relative group'>
                      <img src={img} alt="upploaded image" className="rounded-md size-24 md:size-40 object-cover" />
                      <span onClick={() => handleImageDelete(img)} className="absolute top-2 right-2 bg-slate-100 opacity-20 cursor-pointer group-hover:opacity-90 text-red p-1 rounded">
                        <RiDeleteBinLine />
                      </span>
                    </div>
                  ))
                }
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 pt-4">

                <AppFormInput
                  name="location"
                  required={true}
                  register={register}
                  type="text"
                  label="Flat's location"
                  error={errors.location}
                />

                <AppFormInput
                  name="amount"
                  required={true}
                  register={register}
                  type="number"
                  label="Rent amount"
                  error={errors.amount}
                />

                <AppFormInput
                  name="advanceAmount"
                  required={true}
                  register={register}
                  type="number"
                  label="Rent Advance Amount"
                  error={errors.advanceAmount}
                />

                <AppFormInput
                  name="totalRooms"
                  required={true}
                  register={register}
                  type="number"
                  label="Number of total Rooms"
                  error={errors.totalRooms}
                />

                <AppFormInput
                  name="totalBedrooms"
                  required={true}
                  register={register}
                  type="number"
                  label="Number of bedrooms"
                  error={errors.totalBedrooms}
                />

                <AppFormInput
                  name="squareFeet"
                  required={true}
                  register={register}
                  type="number"
                  label="Number of squareFeet"
                  error={errors.squareFeet}
                />

                <AppFormInput
                  name="amenities"
                  required={true}
                  register={register}
                  type="text"
                  label="Enter Amenities to separating with ,"
                  error={errors.amenities}
                />
                <AppFormInput
                  name="description"
                  required={true}
                  register={register}
                  type="text"
                  label="Detailed description"
                  error={errors.description}
                />

              </div>

              <div className="flex items-center justify-center pt-4">
                {loading || isLoading ? (
                  <button type="button" className="roundedBtn flex items-center justify-center ">
                    <AiOutlineLoading3Quarters className="animate-spin text-white text-2xl" />
                  </button>
                ) : (
                  <button type="submit" className="roundedBtn cursor-pointer">
                    Add Flat
                  </button>
                )}
              </div>
            </form>
          </div>
      }
    </>
  );
};

export default AddFlat;
