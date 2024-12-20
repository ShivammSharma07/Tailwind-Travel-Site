type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

import Image from "next/image";

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      } cursor-pointer`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label className="bold-16 whitespace-normal cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
