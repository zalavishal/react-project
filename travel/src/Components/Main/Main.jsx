import React,{useEffect} from 'react';
import './main.css';
import {GrLocation} from 'react-icons/gr'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import matheran from '../../Assets/matheran.jpg';
import manali from '../../Assets/manali.jpg';
import goa from '../../Assets/goa.jpg';
import jaisalmer from '../../Assets/jaisalmer.jpg';
import munnar from '../../Assets/munnar.jpg';
import Shillong from '../../Assets/Shillong.jpg';
import kochi from '../../Assets/kochi.jpg';
import sikkim from '../../Assets/sikkim.jpg';
import Ooty from '../../Assets/Ooty.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc: matheran,
        destTitle:'matheran',
        location: 'Matheran Mumbai',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Matheran was identified by Hugh Poyntz Malet, the then district collector of Raigad district in the May of 1850. Lord Elphinstone, the then Governor of Bombay laid the foundations of the development as a future hill station. The British developed Matheran as a getaway from the regional summer heat.'
    },
    {
        id:2,
        imgSrc: manali,
        destTitle:'manali',
        location: 'Manali Himanchal',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains.'
    },
    {
        id:3,
        imgSrc: goa,
        destTitle:'Goa',
        location: 'goa',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[9][10] It is located between the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coast.'
    },
    {
        id:4,
        imgSrc: jaisalmer,
        destTitle:'jaisalmer',
        location: 'jaisalmer Rajasthan',
        grade: 'HISTORICAL PLACE',
        fees: '$700',
        description: '.Jaisalmer, town, western Rajasthan state, northwestern India. It is situated on a level plain in the Thar (Great Indian) Desert, about 135 miles (215 km) northwest of Jodhpur.The town, noted for its buildings of yellowish brown stone, was founded in 1156 by Rawal Jaisal, a chief of the Rajputs'
    },
    {
        id:5,
        imgSrc: munnar,
        destTitle:'munnar',
        location: 'munnar kerala',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Munnar is part of the Idukki district in Kerala. The Munnar region is situated at an altitude of 1500 – 2500 m above sea level where the average rainfall is 275 cm. Anamudi, the highest peak in South India, with a height of 2,695 m is the pride of Munnar.'
    },
    {
        id:6,
        imgSrc: Shillong,
        destTitle:'Shillong',
        location: 'Shillong Meghalaya',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Known for pleasant weather conditions and picturesque locations, Shillong in Meghalaya is one of the most cliched yet highly frequented tourist destinations in India. The hill station is popularly known as Scotland of the East, thanks to the rolling hills, gushing waterfalls and lovely landscape that reminded European colonists of stunning Scotland.'
    },
    {
        id:7,
        imgSrc: kochi,
        destTitle:'kochi',
        location: 'kochi kerala',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Kochi is the most densely populated city in Kerala. As of 2011, it has a corporation limit population of 677,381 within an area of 94.88 km2 and a total urban population of more than of 2.1 million within an area of 440 km2, making it the largest and the most populous metropolitan area in Kerala.'
    },
    {
        id:8,
        imgSrc: sikkim,
        destTitle:'Buddha Park',
        location: 'sikkim',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Buddha Park of Ravangla, also known as Tathagata Tsal, is situated near Rabong (Ravangla) in South Sikkim district, Sikkim, India. It was constructed between 2006 and 2013 and features a 130-foot (40 m) high statue of the Buddha as its centerpiece.'
    },
    {
        id:9,
        imgSrc: Ooty,
        destTitle:'Ooty',
        location: 'Ooty',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The name Udhagamandalam is derived from the Toda word "othakal-mund" which means "house in mountains". Ooty stands at 2,240 m (7,347 feet) above sea level in the Nilgiri mountain range. It was founded in the 19th century by the British, and served as the summer headquarters of the Madras Presidency.'
    }
]  

const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destination
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                         return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className='continent flex'>
                                        <GrLocation className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                         )
                    })
                }
            </div>

        </section>
    );
};

export default Main;