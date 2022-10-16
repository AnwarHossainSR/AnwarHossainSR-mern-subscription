export interface textAreaInputProps {
  placeholder: string;
  textareaHeight: 'smallHeight' | 'mediumHeight' | 'largeHeight';
  setValue: (val: string) => void;
}

export const TextAreaInput: React.FC<textAreaInputProps> = ({ placeholder, textareaHeight, setValue }) => {
  return (
    <textarea
      onChange={e => {
        setValue(e.target.value);
      }}
      placeholder={placeholder}
      className={`a-textAreaInput a-textAreaInput--${textareaHeight} `}
    ></textarea>
  );
};
