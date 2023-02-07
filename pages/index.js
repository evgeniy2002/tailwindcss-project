import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <Head className={darkMode ? 'dark' : ''}>
        <title>Test portfolio</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-medium">Next.js portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="bg-gradient-to-b mx-auto from-green-700 relative rounded-full w-72 h-72 flex items-center justify-center overflow-hidden md:w-96 md:h-96">
            <Image src={'/dev-ed-wave.png'} layout="fill" objectFit="cover" alt="" />
          </div>
          <div className="text-center p-10 font-normal">
            <h2 className="text-5xl py-2 text-teal-600 font-bold">Evgeniy</h2>
            <h3 className="text-2xl py-2">Developer and designer</h3>
            <p className="text-md py-3 leading-7 text-gray-900 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid, ea itaque, quae
              ducimus eligendi ab suscipit consectetur, facilis dolore sequi nisi eaque accusamus.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>

        <section>
          <div className="text-center py-12">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-5 mx-auto leading-7 max-w-7xl text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatibus cum quam
              consequuntur delectus{' '}
              <span className="text-green-500 font-medium"> sequi excepturi </span> deleniti minus
              laboriosam perspiciatis, nisi recusandae quaerat quas ullam beatae perferendis ratione
              provident. Atque!
            </p>
            <p className="text-md text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloribus! Excepturi,
              eveniet.
            </p>
          </div>
          <div className="lg:flex gap-7">
            <div className="text-center shadow-lg py-10 rounded-xl my-10">
              <Image src={'/design.png'} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-6 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 ">Photoshop</p>
              <p className="text-gray-800 py-1 ">Figma</p>
              <p className="text-gray-800 py-1 ">Illustrator</p>
            </div>
            <div className="text-center shadow-lg py-10 rounded-xl my-10">
              <Image src={'/code.png'} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-6 pb-2">Beautiful Code</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 ">Photoshop</p>
              <p className="text-gray-800 py-1 ">Figma</p>
              <p className="text-gray-800 py-1 ">Illustrator</p>
            </div>
            <div className="text-center shadow-lg py-10 rounded-xl my-10">
              <Image src={'/consulting.png'} width={100} height={100} className="mx-auto" alt="" />
              <h3 className="text-lg font-medium pt-6 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 ">Photoshop</p>
              <p className="text-gray-800 py-1 ">Figma</p>
              <p className="text-gray-800 py-1 ">Illustrator</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 mx-auto leading-7 max-w-7xl text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatibus cum quam
              consequuntur delectus{' '}
              <span className="text-green-500 font-medium"> sequi excepturi </span> deleniti minus
              laboriosam perspiciatis, nisi recusandae quaerat quas ullam beatae perferendis ratione
              provident. Atque!
            </p>
            <p className="text-md text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloribus! Excepturi,
              eveniet.
            </p>
          </div>
          <div className="pt-10 flex flex-wrap justify-around gap-y-10">
            <div>
              <Image src={'/web1.png'} width={550} height={550} alt="" />
            </div>
            <div>
              <Image src={'/web2.png'} width={550} height={550} alt="" />
            </div>
            <div>
              <Image src={'/web3.png'} width={550} height={550} alt="" />
            </div>
            <div>
              <Image src={'/web4.png'} width={550} height={550} alt="" />
            </div>
            <div>
              <Image src={'/web5.png'} width={550} height={550} alt="" />
            </div>
            <div>
              <Image src={'/web6.png'} width={550} height={550} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
