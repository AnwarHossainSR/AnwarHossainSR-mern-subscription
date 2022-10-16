export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string;
  name?: string,
  id?: string
}


export const Checkbox: React.FC<CheckboxProps> = ({ children, name, id, ...inputProps }) => {
  return (
    <label className="a-checkbox">{children}
      <input id={id} name={name} className="a-checkbox__checkfield" type="checkbox" {...inputProps} />
      <span className="a-checkbox__custom"></span>
    </label>
  );
};

