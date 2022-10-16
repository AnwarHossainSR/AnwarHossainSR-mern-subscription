export interface TextInputProps {
  prefix?: SVGAElement;
  placeholder?: string;
  inputFontSize: 'small' | 'medium';
  backgroundColor?: 'lightGreen';
  borderColor?: 'green';
  value?: string;
  setValue: (val: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  prefix,
  placeholder,
  inputFontSize,
  backgroundColor,
  borderColor,
  value,
  setValue,
}) => {
  return (
    <div className={`a-textInput  a-textInput--${backgroundColor}  a-textInput--${borderColor} `}>
      {prefix && (
        <embed
          type="image/svg+xml"
          //@ts-ignore
          src={prefix}
          className={`a-textInput__prefix a-textInput__prefix--rightMargin`}
        />
      )}
      <input
        className={`a-textInput__input a-textInput__input--${inputFontSize} a-textInput__input--${backgroundColor} `}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </div>
  );
};
