import { SelectedPage } from '@/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
}

const Links = ({page,selectedPage,setSelectedPage}: Props) => {

    const lowerCasePage =  page.toLowerCase() as SelectedPage;

  return (
    <AnchorLink
        className={`${selectedPage===`${lowerCasePage}`?"text-bold text-color-text-hover":""} transition w-full h-full  duration-500 hover:text-color-text-hover items-center justify-center flex`}
        href={`#${lowerCasePage}`} 
        onClick={()=>setSelectedPage(lowerCasePage)}
    >       
        {page}
    </AnchorLink>
  )
}

export default Links