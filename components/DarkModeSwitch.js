import { MdLightMode } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
       setMounted(true); 
    }, []);


    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='flex text-2xl cursor-pointer hover:text-indigo-800'>
        {mounted && 
            (currentTheme === "dark" ? (
            <MdLightMode onClick={() => setTheme("light")}/>
            ) : (
            <BsFillMoonStarsFill onClick={() => setTheme("dark")}/>
            ))}

    </div>
  )
}
