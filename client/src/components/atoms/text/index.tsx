export interface TextProps {
  type: 'font10' | 'font11' | 'font12' | 'font13' | 'font14' | 'font15' | 'font16' | 'font17' | 'font18' | 'font24';
  children: string | number;
  fontWeight: 'bold' | 'medium' | 'regular' | 'semi-bold';
  fontStyle?: 'italic';
  color:
    | 'black'
    | 'white'
    | 'black-active'
    | 'gray-light'
    | 'green'
    | 'primary'
    | 'slate-gray'
    | 'blue-bayoux'
    | 'pumpkin'
    | 'cinnabar';
  lineHeight:
    | 'line14'
    | 'line15'
    | 'line16'
    | 'line17'
    | 'line18'
    | 'line20'
    | 'line21'
    | 'line22'
    | 'line24'
    | 'line25'
    | 'line26'
    | 'line28'
    | 'line33';
  textAlign: 'left' | 'center' | 'right' | 'justify';
}

export const Text: React.FC<TextProps> = ({ type, children, fontWeight, fontStyle, color, lineHeight, textAlign }) => {
  return (
    <p
      className={`a-text a-text--${type}
      a-text--${fontWeight}
      a-text--${color}
      a-text--${lineHeight}
      a-text--${textAlign}
      ${fontStyle && `a-text--${fontStyle}`}`}
    >
      {children}
    </p>
  );
};
