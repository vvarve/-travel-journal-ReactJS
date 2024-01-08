import React from "react";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";

export default function App() {
    return (
        <div>
            <Nav />
            <Content 
            imageP="./images/mountain.bmp"
            icon="./images/path.png" 
            country="japan" 
            viewMap="https://www.google.com.co/maps/place/Monte+Fuji/@35.3630329,138.7193596,16z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
            site="Mount Fuji" 
            date="12 Jan, 2021 - 24 Jan, 2021" 
            description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." />

            <Content 
            imageP="./images/sydney.bmp"
            icon="./images/path.png" 
            country="australia" 
            viewMap="https://www.google.com.co/maps/place/%C3%93pera+de+S%C3%ADdney/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu" 
            site="Mount Sydney Opera House" 
            date="27 May, 2021 - 8 Jun, 2021" 
            description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings." />
            
            <Content 
            imageP="./images/norway.bmp"
            icon="./images/path.png" 
            country="norway" 
            viewMap="https://www.google.com.co/maps/place/Monte+Fuji/@35.3630329,138.7193596,16z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
            site="Geirangerfjord" 
            date="01 Oct, 2021 - 18 Nov, 2021" 
            description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality." />
        </div>

    )
}