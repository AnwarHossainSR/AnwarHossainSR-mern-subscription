export interface NoteProps {
  note: string;
  iconSrc: string;
  altTag?: string;
  handleClick?: () => void;
}
export const Note: React.FC<NoteProps> = ({ note, iconSrc, altTag, handleClick }) => {
  return (
    <div className="a-note">
      <span className="a-note__text"> {note} </span>
      <img className="a-note__icon" src={iconSrc} alt={altTag} onClick={handleClick} />
    </div>
  );
};

