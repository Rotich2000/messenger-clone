"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

type Props = {
    src?: string | null;
    isOpen?: boolean;
    onClose: () => void;
}

const ImageModal = ({src, isOpen, onClose}: Props) => {
    if(!src){
        return null;
    }
  return (
    <Modal 
    isOpen={isOpen}
    onClose={onClose}
    >
        <div className="w-80 h-80">
            <Image
            src={src}
            alt="imageModal"
            fill
            className="object-cover"
            />
        </div>
    </Modal>
  )
}

export default ImageModal