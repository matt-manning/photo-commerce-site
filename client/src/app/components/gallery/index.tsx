"use client";
import React from 'react'
import Masonry from "react-responsive-masonry"

const images: string[] = ["https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
                          "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095.jpg?w=1084.125&h=813.75",
                          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F456cc62a-db43-11ec-8de3-573a6521e09e.jpg?crop=5312%2C3541%2C0%2C0",
                          "https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_2560%2Cc_limit/Mountain-Travel_GettyImages-503689316.jpg",
                          "https://storage.googleapis.com/pod_public/1300/156009.jpg",
                          "https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland.jpg",
                          "https://media.cnn.com/api/v1/images/stellar/prod/170407220907-01-iconic-mountains-k2-restricted.jpg?q=w_5037,h_2834,x_0,y_0,c_fill",
                          "https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg?cs=srgb&dl=pexels-alex-kinkate-368260.jpg&fm=jpg",
                          "https://hips.hearstapps.com/hmg-prod/images/vinicunca-rainbow-mountain-royalty-free-image-1623253239.jpg",
                          "https://www.nps.gov/common/uploads/grid_builder/mountains/crop16_9/9AC3DBEF-CC56-FFF9-6763BD322DB7F356.jpg",
                          "https://images.takeshape.io/1f1d0876-be74-4b33-99c8-6ac93f1d70db/dev/4468e4af-526e-4ed6-a0c1-a0dc7673cef3/nicolo-di-giovanni-535450-unsplash.png?auto=compress%2Cformat&w=1200",
                          "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1366909.jpg&fm=jpg"]

const Gallery = () => {
  return (
    <div className="m-20">
        <Masonry className="" columnsCount={4} gutter="15px">
            {images.map((image, i) => (
                <img className="w-full block" key={i} src={image}/>
            ))}
        </Masonry>
    </div>

  )
}

export default Gallery