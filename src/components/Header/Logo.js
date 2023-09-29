'use client'

import Image from "next/image"
import Link from "next/link"
import profileImg from '@/public/AROK.svg';

import { useRef, useEffect } from 'react';


const Logo = () => {

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const letters = "abcdefghijklmnopqrstuvwxyz-^,/(!$%&|¨´{ç}][=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    element.onmouseover = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 56)]
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 80);
    }
  }, []);



  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 rounded-full overflow-hidden  dark:border-gray  mr-1 md:mr-2">
            <Image src={profileImg} alt="CodeCove logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
      <span ref={ref} data-value="CodeCove" className="font-bold dark:font-semibold text-xl md:text-xl">CodeCove</span>
    </Link>
  )
}

export default Logo
