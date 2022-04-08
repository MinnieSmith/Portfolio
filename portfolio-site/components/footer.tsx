import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faLinkedin}/>
    const element2 = <FontAwesomeIcon icon={faGithub}/>

    return (
        <div className="text-center p-2 text-slate-400">
            <div>
                Designed and built by Minhimoo
            </div>
                <Link href={'https://www.linkedin.com/in/minh-smith-5a4896b0/'}>
                    <a className='mb-4 text-xl p-2'>
                        {element1}  
                    </a>
                </Link>
                <Link href={"https://github.com/MinnieSmith?tab=repositories"}>
                    <a className='mb-4 text-xl'>
                        {element2} 
                    </a>
                </Link>
        </div>
    );

}

export default Footer;