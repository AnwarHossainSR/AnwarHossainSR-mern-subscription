export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string,
  name?: string,
  isChecked?: boolean
}
export const Toggle: React.FC<ToggleProps> = ({ id, name, isChecked }) => {
  return (
    <label className="a-toggle">
      <input id={id} name={name} type="checkbox" className="a-toggle__container" checked={isChecked} />
      <span className="a-toggle__slider"></span>
    </label>
  );
};
