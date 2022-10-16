import { INPUT_ICONS } from '../../../settings/settings';
import { useState } from 'react';

export interface fileInputProps {
  componentType: string;
  placeholder: string;
  fileInputFontSize: 'small' | 'medium';
}

export const FileInput: React.FC<fileInputProps> = props => {
  const [fileName, setFileName] = useState('');

  return (
    <div className={`a-fileInput`}>
      <input
        type="file"
        className={`a-fileInput__input`}
        onChange={el => {
          setFileName(el.target.value.replace(/^.*[\\\/]/, ''));
        }}
      />
      <span
        className={`a-fileInput__label a-fileInput__label--${props.fileInputFontSize} ${
          fileName === '' ? 'a-fileInput__label--placeholder' : 'a-fileInput__label--fileName'
        }`}
      >
        {fileName === '' ? props.placeholder : fileName}
      </span>
      <embed
        type="image/svg+xml"
        //@ts-ignore
        src={INPUT_ICONS.browseFilesIcon}
        className="a-fileInput__button"
      />
    </div>
  );
};
