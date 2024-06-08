import { Input } from "@/components/ui/Input";
const InputIcon = ({
  className,
  type,
  placeholder,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <div className="flex flex-row w-full gap-1 items-center">
      {startIcon && (
        <div className="rounded-full flex items-center justify-center w-10 h-10 bg-slate-100">
          {startIcon}
        </div>
      )}
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {endIcon && (
        <div className="rounded-full flex items-center justify-center w-10 h-10 bg-slate-100">
          {endIcon}
        </div>
      )}
    </div>
  );
};

export default InputIcon;
