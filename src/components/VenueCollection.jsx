import getConfig from "next/config";
import { useEffect, useState } from "react";

import VenueCard from "./VenueCard";
export default function VenueCollection() {
    const { publicRuntimeConfig } = getConfig();
    const [venues, setVenues] = useState([]);

    useEffect(() => {
        const fetchVenues = async() => {
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/venue`);
                const data  = await response.json();

                setVenues(data.results);
            } catch(error) {
                console.error('Error fetching venues. ', error);
            }
        }

        fetchVenues();
    }, [publicRuntimeConfig.API_URL])

    return (
        <div>
            <div className="text-3xl font-bold">
                Venue List
            </div>
            <div>
                {venues && <ul className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2">
                    {venues.map((item) => (
                        <li key={item.id} className="w-full p-[2%]">
                            <VenueCard
                                id={item.id}
                                venuename={item.name}
                                picture={`${publicRuntimeConfig.API_URL}${item.picture}`}
                                description={item.desc}

                            />
                        </li>
                    ))}
                </ul> }
            </div>
        </div>
    );
}