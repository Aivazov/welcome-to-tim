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
      <h3 className="title">Contact</h3>

      <h3 className="absolute top-40 text-gray-500 text-md tracking-[1px] max-w-5xl max-md:max-w-xl">
        Please feel free to send me a message by filling out the fields below
        (phone is not required)
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
            type="tel"
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
          className="bg-[#f7ab0a]/70 py-5 rounded-md text-black text-lg font-bold hover:bg-[#f7ab0a] transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
