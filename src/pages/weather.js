import React, { useState } from "react";
import Layout from "../components/layout";
import * as styles from '../components/weather.module.css'

const countryCodes = {'Afghanistan': 'AF', 'Albania': 'AL', 'Algeria': 'DZ', 'Andorra': 'AD', 'Angola': 'AO', 'Antigua and Barbuda': 'AG','Argentina': 'AR','Armenia': 'AM','Australia': 'AU','Austria': 'AU','Azerbaijan': 'AZ','The Bahamas': 'BS','Bahrain': 'BH','Bangladesh': 'BD','Barbados': 'BB','Belarus': 'BY','Belgium': 'BE','Belize': 'BZ','Benin': 'BJ','Bhutan': 'BT','Bolivia': 'BO','Bosnia and Herzegovina': 'BA','Botswana': 'BW','Brazil': 'BR','Brunei': 'BN','Bulgaria': 'BG','Burkina Faso': 'BF','Burundi': 'BI','Cabo Verde': 'CV','Cambodia': 'KH','Cameroon': 'CM','Canada': 'CA','Central African Republic': 'CF','Chad': 'TD','Chile': 'CL','China': 'CN','Colombia': 'CO','Comoros': 'KM','Congo, Democratic Republic of the': 'CD','Congo, Republic of the': 'CG','Costa Rica': 'CR',"Côte d'Ivoire": 'CI','Croatia': 'HR','Cuba': 'CU','Cyprus': 'CY','Czech Republic': 'CZ','Denmark': 'DK','Djibouti': 'DJ','Dominica': 'DM','Dominican Republic': 'DO','East Timor (Timor-Leste)': 'TL','Ecuador': 'EC','Egypt': 'EG','El Salvador': 'SV','Equatorial Guinea': 'GQ','Eritrea': 'ER','Estonia': 'EE','Eswatini': 'SZ','Ethiopia': 'ET','Fiji': 'FJ','Finland': 'FI','France': 'FR','Gabon': 'GA','The Gambia': 'GM','Georgia': 'GE','Germany': 'DE','Ghana': 'GH','Greece': 'GR','Grenada': 'GD','Guatemala': 'GT','Guinea': 'GN','Guinea-Bissau': 'GW','Guyana': 'GY','Haiti': 'HT','Honduras': 'HN','Hungary': 'HU','Iceland': 'IS','India': 'IN','Indonesia': 'ID','Iran': 'IR','Iraq': 'IQ','Ireland': 'IE','Israel': 'IL','Italy': 'IT','Jamaica':'JM','Japan':'JP','Jordan': 'JO','Kazakhstan': 'KZ','Kenya': "KE",'Kiribati': 'KI','Korea, North': 'KP','Korea, South': 'KR','Kuwait': 'KW','Kyrgyzstan': 'KG','Laos': 'LA','Latvia': 'LV','Lebanon': 'LB','Lesotho': 'LS','Liberia': 'LR','Libya': 'LY','Liechtenstein': 'LI','Lithuania': 'LT','Luxembourg': 'LU','Madagascar': 'MG','Malawi': 'MW','Malaysia': 'MY','Maldives': 'MV','Mali': 'ML','Malta': 'MT','Marshall Islands': 'MH','Mauritania': 'MR','Mauritius': 'MU','Mexico': 'MX','Micronesia, Federated States of': 'FM','Moldova': 'MD','Monaco': 'MC','Mongolia': 'MN','Montenegro': 'ME','Morocco': 'MA','Mozambique': 'MZ','Myanmar (Burma)': 'MM','Namibia': 'NA','Nauru': 'NR','Nepal': 'NP','Netherlands': 'NL','New Zealand': 'NZ','Nicaragua': 'NI','Niger': 'NE','Nigeria': 'NG','North Macedonia': 'MK','Norway': 'NO','Oman': 'OM','Pakistan': 'PK','Palau': 'PW','Panama': 'PA','Papua New Guinea': 'PG','Paraguay': 'PY','Peru': 'PE','Philippines': 'PH','Poland': 'PL','Portugal': 'PT','Qatar': 'QA','Romania': 'RO','Russia': 'RU','Rwanda': 'RW','Saint Kitts and Nevis': 'KN','Saint Lucia': 'LC','Saint Vincent and the Grenadines': 'VC','Samoa': 'WS','San Marino': 'SM','Sao Tome and Principe': 'ST','Saudi Arabia': 'SA','Senegal': 'SN','Serbia': 'RS','Seychelles': 'SC','Sierra Leone': 'SL','Singapore': 'SG','Slovakia': 'SK','Slovenia': 'SI','Solomon Islands': 'SB','Somalia': 'SO','South Africa': 'ZA','Spain': 'ES','Sri Lanka': 'LK','Sudan': 'SD','Sudan, South': 'SD','Suriname': 'SR','Sweden': 'SE','Switzerland': 'CH','Syria': 'SY','Taiwan': 'TW','Tajikistan': 'TJ','Tanzania': 'TZ','Thailand': 'TH','Togo': 'TG','Tonga': 'TO','Trinidad and Tobago': 'TT','Tunisia': 'TN','Turkey': 'TR','Turkmenistan': 'TM','Tuvalu': 'TV','Uganda': 'UG','Ukraine': 'UA','United Arab Emirates': 'AE','United Kingdom': 'GB','United States': 'US','Uruguay': 'UY','Uzbekistan': 'UZ','Vanuatu': 'VU','Venezuela': 'VE','Vietnam': 'VN','Yemen': 'YE','Zambia': 'ZM','Zimbabwe': 'ZW'};
const allCountries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo, Democratic Republic of the','Congo, Republic of the','Costa Rica',"Côte d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia, Federated States of','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Sudan, South','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [renderElements, setRenderElements] = useState(['Oz', 'Mist', "70 degrees", '80 degrees', '70 degrees', '80 degrees', '80%', '90 degrees', '20 k/h' ]);
    const [imgSrc, setImgSrc] = useState('');

    const handleChange = (e) => {
        if(e.target.id == 'city') {
            setCity(e.target.value);
        }
        if(e.target.id == 'state') {
            setState(e.target.value)
        }
        if(e.target.id == 'country') {
            setCountry(e.target.value)
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCodes[country]}&limit=1&appid=69ff2ed8b60981a3839ce9cc55bec2a8`, {mode:'cors'})

            .then(function(response) {
                return response.json()
                })

            .then(function(response) {
                return([response[0].lon, response[0].lat])
                })

            .then(function(response) {
                 console.log(response)
                return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response[1]}&lon=${response[0]}&units=imperial&appid=69ff2ed8b60981a3839ce9cc55bec2a8`, {mode:'cors'})
                })

            .then(function(response) {
                return response.json()
                })

            .then(function (response) {
                return[response.main, response.weather, response.wind]
                })

            .then(function (response) {
                setRenderElements([`${city}, ${state}`, response[1][0].description.toUpperCase(), response[0].temp + '\u00B0', response[0].feels_like + '\u00B0', response[0].temp_min + '\u00B0', response [0].temp_max + '\u00B0', response[0].humidity + '%', response[2].deg, response[2].speed + 'm/h']);
                setImgSrc(`http://openweathermap.org/img/wn/${response[1][0].icon}@2x.png`);
                
        });


    }
    return (
        <Layout>
            <div className={styles.content}>    
                <form onSubmit={onSubmit} className={styles.inputs}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={city} onChange={handleChange}></input>
                    <div>
                        <label for="state">State(if in US)</label>
                        <input type="text" id="state" value={state} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <select name="country" id="country" value={country} onChange={handleChange}>
                            {allCountries.map((option) => {
                                return (
                                <option value={option}>{option}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button>Search</button>
                </form>
                <div className={styles.displayContainer}>
                    <div className={styles.location}>{renderElements[0]}</div>
                    <div className={styles.weather}>
                        <img id="logo" src={imgSrc} alt=""></img>
                        <div id="description">{renderElements[1]}</div>
                    </div>
                    <div className={styles.temperatures}>
                        <div id="temp">
                            <label for="t">Temperature (F)</label>
                            <div id="t">{renderElements[2]}</div>
                        </div>
                        <div id="feels_like">
                            <label for="fl">Feels Like</label>
                            <div id="fl">{renderElements[3]}</div>
                        </div>
                        <div id="temp_min">
                            <label for="tmin">Minimum Temp</label>
                            <div id="tmin">{renderElements[4]}</div>
                        </div>
                        <div id="temp_max">
                            <label for="tmax">Maximumn Temp</label>
                            <div id="tmax">{renderElements[5]}</div>
                        </div>
                        <div id="humidity">
                            <label for="h">Humidity</label>
                            <div id="h">{renderElements[6]}</div>
                        </div>
                    </div>
                            
                    <div className={styles.wind}>
                        <div className={styles.title}>Wind</div>
                        <div className={styles.degrees}>{renderElements[7]}</div>
                        <div className={styles.speed}>{renderElements[8]}</div>
                    </div>
                </div>
         </div>
        </Layout>
    )
};

export default WeatherApp;