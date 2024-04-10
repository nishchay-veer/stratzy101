import { FaInstagram, FaTwitter,  FaLinkedin, FaWhatsapp, FaLink } from 'react-icons/fa'
export default function Info() {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex gap-4">
            <p className="font-medium text-xs">Share On</p>
            
            <FaInstagram className="text-[#EBECEC] text-xl" />
            <FaTwitter className="text-[#EBECEC] text-xl" />
            <FaLinkedin className="text-[#EBECEC] text-xl" />
            <FaWhatsapp className="text-[#EBECEC] text-xl" />
            <FaLink className="text-[#EBECEC] text-xl" />
            </div>


            

        </div>
    );
    }