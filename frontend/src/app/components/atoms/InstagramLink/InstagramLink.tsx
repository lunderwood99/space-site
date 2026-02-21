import { FunctionComponent } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

interface InstagramLink extends React.HTMLProps<HTMLAnchorElement> { }

export const InstagramLink: FunctionComponent<InstagramLink> = ({ ...instagramLinkAttributes }) => {
  return (
    <a href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} className="transition ease-in-out duration-500 hover:text-violet-500 hover:cursor-pointer" target="_blank"
      rel="noopener noreferrer" {...instagramLinkAttributes}
    >
      <InstagramIcon />
    </a>
  )
}