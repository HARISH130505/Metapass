import { TypeAnimation } from 'react-type-animation';
import Nav from './Nav';

function About(){
  return (
    <div>
        <Nav/>
        <div className='flex flex-col w-screen h-screen items-center '>
            <h1 className='text-4xl text-center font-bold'>ABOUT US</h1>
            <TypeAnimation
            sequence={[
                "Decentralized Identity (DID) and NFT Passports are two emerging technologies offering decentralized digital identity solutions. DID, prioritizing self-sovereignty, privacy, verifiability, and interoperability, provides granular control over personal data. It's versatile, suitable for various applications like finance, healthcare, and government services. NFT Passports, while leveraging blockchain, focus on ownership and collectible value, making them suitable for specific, limited-scope applications.When choosing, consider factors like complexity, user experience, security, privacy, interoperability, and scalability. DID's robust framework and granular control make it ideal for complex identity management, while NFT Passports offer a simpler user experience for limited-scope applications. DID's emphasis on security and privacy, along with its interoperability and scalability, positions it as a more comprehensive and future-proof solution, especially for applications requiring high levels of security and privacy.",
                1000,
            ]}
            wrapper="span"
            speed={100}
            className='font-bold text-2xl w-[1000px] bg-slate-600 rounded-xl bg-opacity-45 p-6 my-10'
            />
        </div>
    </div>
  );
};
export default About;