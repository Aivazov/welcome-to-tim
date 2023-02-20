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
    <div className="relative h-screen max-w-7xl px-10 mx-auto flex flex-col justify-evenly items-center text-center sm:flex-row md:text-left z-0">
      <h3 className="title">Contact</h3>

      <h3 className="absolute top-40 text-gray-500 text-center text-md tracking-[1px] max-w-5xl max-md:max-w-xl">
        Please feel free to send me a message by filling out the fields below
        (phone is not required)
      </h3>

      {/* <div className='flex flex-col space-y-10'> </div> */}

      <form
        action="https://getform.io/f/b6eb4c30-4aae-4130-a5e2-cfba62b93401"
        method="POST"
        encType="multipart/form-data"
        // onSubmit={handleSubmit(onSubmit)}
        // className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-2 w-full py-1 max-sm:mt-16 ">
          <div className="flex flex-col">
            <input
              {...register('name')}
              className="contact-input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              {...register('phone')}
              className="contact-input"
              type="tel"
              placeholder="Phone"
              name="phone"
            />
          </div>
        </div>

        <div className="flex flex-col py-1">
          <input
            {...register('email')}
            className="contact-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="flex flex-col py-1">
          <input
            {...register('subject')}
            className="contact-input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>

        <div className="flex flex-col py-1">
          <textarea
            {...register('message')}
            className="contact-input"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#f7ab0a]/70 py-5 mt-1 rounded-md text-black text-lg font-bold hover:bg-[#f7ab0a] transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
