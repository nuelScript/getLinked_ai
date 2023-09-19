import RegisterForm from "@/components/register-form";
import { register } from "@/public/images/images";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-[1507px]:items-start min-[1507px]:justify-center min-[1507px]:flex-row min-[1507px]:space-x-40 bg-secondary1">
      <h3 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-secondary3 block min-[915px]:hidden sm:px-20 px-14 md:px-32 py-10">
        Register
      </h3>
      <div className="flex flex-col items-center min-[1507px]:items-start min-[1507px]:justify-center min-[1507px]:flex-row min-[1507px]:space-x-40 bg-secondary1">
        <Image
          src={register}
          width={717}
          height={717}
          alt="register-image"
          className="object-center object-cover"
        />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
