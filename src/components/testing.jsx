import React, { useState, useEffect } from 'react';
import axios from "axios";
import './saas/testing.scss'
// import {Link} from "react-router-dom";

const options = {
    method: 'GET',
    url: 'https://genius.p.rapidapi.com/artists/16775/songs',
    headers: {
        'X-RapidAPI-Key': '58103a110cmshf59bd6059b3037bp118004jsn3f7ad03993d2',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
    }
}


const Testing = () => {
    const [data, setData] = useState()
    const [input, setInput] = useState()
    useEffect(() => {
        axios.request(options).then(function (response) {
            // console.log(response.data.response.songs);
            setData(response.data.response.songs)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    console.log(data)


    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setInput(e.target.value)
    // }
    // if (input === 0) {
    //     data = data.filter((i) => {
    //         return i.artist_names.match(input)
    //     })
    // }
    // console.log(input)
    return (
        <div className="">
            <div className="searchContainer">
                <input type="text"
                    name="search" id="search"
                    placeholder='search for artist'
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />
            </div>
            <div className={"main-container"}>

                {
                    // eslint-disable-next-line
                    data?.filter((val) => {
                        if (input === "") {
                            return val
                        } else if (val.artist_names?.toLowerCase().includes(input?.toLowerCase())) {
                            return val
                        }

                    })?.map((details, index) => {
                        return (
                            <div className={"apiInsideContainer"} key={index}>
                                <div className={"apiFlexContainer"}>
                                    <div className="apiImageContainer">
                                        <img src=
                                            {details.header_image_thumbnail_url}
                                            alt={"artist-photos"} />
                                    </div>
                                    <div className="apiTextContainer">
                                        <h2>
                                            {details.artist_names}
                                        </h2>
                                        <p>{details.title}</p>
                                        <p>Release Date: {details.release_date_for_display}</p>                                        
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Testing