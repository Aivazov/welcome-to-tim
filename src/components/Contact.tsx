import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};
type Inputs = {
  name: string;
  phone: number;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    // window.location.href = `mailto:ivazow.t@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    console.log(data);
  };

  return (
    <div className="relative h-screen max-w-7xl px-10 max-auto flex flex-col justify-evenly items-center text-center md:flex-row md:text-left z-0">
      <h3 className="absolute top-24 ml-4 text-gray-500 text-2xl tracking-[19px] uppercase">
        Contact
      </h3>

      {/* <div className='flex flex-col space-y-10'> </div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register('name')}
            className="contact-input"
            type="text"
            placeholder="Name"
            required
          />
          <input
            {...register('phone')}
            className="contact-input"
            type="number"
            placeholder="Phone"
          />
        </div>

        <input
          {...register('email')}
          className="contact-input"
          type="email"
          placeholder="Email"
          required
        />

        <input
          {...register('subject')}
          className="contact-input"
          type="text"
          placeholder="Subject"
        />

        <textarea
          {...register('message')}
          className="contact-input"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 rounded-md text-black text-lg font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
