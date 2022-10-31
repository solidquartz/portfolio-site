import React from "react";
import { motion } from "framer-motion";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import { DocumentIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Input = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

type Props = {};

function Contact({}: Props) {
  // const {
  //   register,
  //   handleSubmit,
  // } = useForm<Input>();

  // const onSubmit: SubmitHandler<Input> = (formData) => console.log(formData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="flex flex-col h-screen relative text-center justify-center mx-auto items-center"
    >
      <div>
        <h3 className="title">get in touch</h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <AtSymbolIcon className="h-5 w-5 text-purple-300 animate-pulse hover:animate-bounce" />
          <a href="mailto:akymacd@gmail.com">
            {" "}
            <p>akymacd@gmail.com</p>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <BriefcaseIcon className="h-5 w-5 text-purple-300 animate-pulse hover:animate-bounce" />
          <a
            href="https://www.linkedin.com/in/akymacdonald/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <p>linkedin</p>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <DocumentIcon className="h-5 w-5 text-purple-300 animate-pulse hover:animate-bounce" />
          <a
            href="https://resume.creddle.io/resume/4fclbku6z2b"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <p>cv/resume</p>
          </a>
        </div>
      </div>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto pt-10"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="name"
            type="text"
            className="input"
          />
          <input
            {...register("email")}
            placeholder="email address"
            type="email"
            className="input"
          />
        </div>

        <input
          {...register("subject")}
          placeholder="subject"
          type="text"
          className="input"
        />
        <textarea
          {...register("message")}
          placeholder="message"
          className="input"
        />
        <button
          type="submit"
          className="heroButton flex items-center justify-center"
        >
          send
        </button>
      </form> */}
    </motion.div>
  );
}

export default Contact;
