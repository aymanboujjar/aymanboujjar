import logo from '../assets/images/logo.png'

type LogoProps = {
    size: string; // example: "w-16 h-16" or "50px"
}

export default function Logo({ size }: LogoProps) {
    return (
        <img 
            src={logo} 
            alt="Logo" 
            className={size} // if you're using Tailwind
        />
    )
}
