import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeImage } from "./gallerySlice"

export default function Gallery() {
    const images = useSelector((state) => state.gallery.images)
    const dispatch = useDispatch()
    console.log(images)
    return (
        <div className="grid gap-2 mt-10 grid-cols-3">
            {images.map((image) => (
                <div className="relative">
                    <img
                        src={image}
                        alt="oj hitta bilden, sorry"
                        className="h-full object-cover"
                    />
                    <div
                        onClick={() => {
                            dispatch(removeImage(image))
                        }}
                        className="w-8 h-8 bg-blue-500 absolute top-1 right-1 cursor-pointer"
                    >
                        X
                    </div>
                </div>
            ))}
        </div>
    )
}
