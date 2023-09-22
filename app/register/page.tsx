import Image from "next/image";
import RegisterForm from "@/components/register-form";
import { register } from "@/public/images/images";

const RegisterPage = () => {
  return (
    <div className="relative flex flex-col min-[1507px]:items-start min-[1507px]:justify-center min-[1507px]:flex-row min-[1507px]:space-x-40 bg-secondary1 z-10">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary1 rounded-full filter blur-3xl opacity-25 z-10 animate-blob"></div>
      <div className="absolute -bottom-36 right-0 w-[500px] h-[500px] bg-primary1 rounded-full filter blur-3xl opacity-25 z-10 animate-blob animation-delay-4000"></div>
      <h3 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-secondary3 block min-[915px]:hidden sm:px-20 px-14 md:px-32 py-10">
        Register
      </h3>
      <div className="flex flex-col items-center min-[1507px]:items-start min-[1507px]:justify-center min-[1507px]:flex-row min-[1507px]:space-x-40 bg-secondary1">
        <Image
          src={register}
          width={717}
          height={717}
          alt="register-image"
          className="object-center object-cover z-10"
        />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
