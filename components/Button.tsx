import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  margin: string;
  icon?: string;
};

const Button = ({ type, title, variant, margin, icon }: ButtonProps) => {
  return (
    <button type={type} className={`${variant} ${margin} flexCenter gap-3`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}{" "}
      <label>{title}</label>
    </button>
  );
};

export default Button;
