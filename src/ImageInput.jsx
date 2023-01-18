import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addImage } from "./gallerySlice"

export default function ImageInput() {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    return (
        <div>
            <h1 className="text-4xl mb-4 font-semibold font-serif">
                Skriv in en url till en bild nedan!
            </h1>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border-2 mr-2 px-3 py-1 rounded-md border-indigo-600"
            />
            <button
                onClick={() => dispatch(addImage(image))}
                className="text-white bg-indigo-600 py-1 px-3 rounded-md"
            >
                Lägg till bild!
            </button>
        </div>
    )
}
