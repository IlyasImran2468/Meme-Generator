
import './globals.css'


import Link from "next/link";
import Image from "next/image"; 

export default async function Home() {
    const response = await fetch('https://api.imgflip.com/get_memes')
                            .then(res => res.json())
                            .catch(error => console.error('Error fetching memes:', error));

    if (!response || !response.data || !response.data.memes) {
        return <div>Error fetching memes</div>;
    }
// console.log(response.data.memes,'---ress')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <h1 className='meme-head'><span className='ind'>M</span>emes <span className='ind'>G</span>enerator🤩</h1><br/>
           
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                {response.data.memes.map((item, index) => (
             <Link href={`/detail/${item.id}`} >

                    <div key={index} className='img'>
                        <Image src={item.url} width={2000} height={2000} alt={item.name} />
                    </div></Link>
                ))}
            </div>
        </main>
    );
}



