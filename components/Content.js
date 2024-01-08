import React from "react";

export const Content = ({imageP, icon, country, viewMap, site, date, description}) => {
    return (
        <div className="content-div-one">
            <div className="content-div-img-map">
                <img src={imageP}></img>
            </div>
            <div className="content-des-map">
                    <img src={icon}></img>
                    <span className="span-country">{country}</span><a href={viewMap}>View on Google Maps</a>
                    <h3 className="h3-site">{site}</h3>
                    <span className="span-date">{date}</span>
                    <p className="p-description">{description}</p>
            </div>
        </div>
    )
}