export interface LogoProps{
  altTag: string,
  imageSrc: string
}
export const Logo: React.FC<LogoProps> = ({altTag, imageSrc}) => {
  return (
    <img className="a-logo" alt={altTag} src={imageSrc}/>
  );
};
