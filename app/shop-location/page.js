"use client";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p className="text-center mt-5">Loading Map..</p>;
  }
  return <Map />;

  function Map() {
    return (
      <div className="container m-auto mt-5 flex flex-col justify-center items-center p-2">
        <h1 className="text-xl">Corner Barber Shop</h1>
        <p>1007 N A ST</p>
        <p>Richmond, Indiana 47374</p>
        <small>
          Located on the right side of the same building as Le Crazy Horse
        </small>
        <GoogleMap
          zoom={15}
          center={{ lat: 39.8304, lng: -84.88868 }}
          mapContainerClassName="mapCss"
        >
          <MarkerF position={{ lat: 39.8304, lng: -84.88868 }} />
        </GoogleMap>
      </div>
    );
  }
}
