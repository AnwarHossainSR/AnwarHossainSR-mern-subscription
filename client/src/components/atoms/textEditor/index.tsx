import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Text } from '../text';

export interface TextEditorProps {
  value: string;
  label?: string;
  placeholder: string;
  isCustomEditor: boolean;
  labelFontWeight?: 'bold' | 'medium' | 'regular' | 'semi-bold';
  labelColor?:
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
  setFieldValue: (val: string) => void;
}

export const TextEditor = ({
  value,
  setFieldValue,
  label = '',
  labelColor = 'black-active',
  labelFontWeight = "bold",
  placeholder,
  isCustomEditor,
}: TextEditorProps) => {
  return (
    <div className="a-textEditor">
      {label && (
        <label className="a-textEditor__label">
          <Text color={labelColor} fontWeight={labelFontWeight} lineHeight="line22" type="font16" textAlign="left">
            {label}
          </Text>
        </label>
      )}
      {isCustomEditor ? (
        <CKEditor
          config={{ placeholder: placeholder }}
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setFieldValue(data);
          }}
        />
      ) : (
        <textarea
          className="a-textEditor__default"
          placeholder={placeholder}
          onChange={(e: any) => setFieldValue(e.target.value)}
        ></textarea>
      )}
    </div>
  );
};
