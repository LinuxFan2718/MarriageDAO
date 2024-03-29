/*
* Generally, components should not contain internal state/logic!
* Generally, we want all state/logic variables to be in the screen-functions.ts files so we have access to them all in one place.
* This is because we want to be able to easily change the state/logic of the screen in one place.
* It is okay to include internal state/logic if multiple instances of the component are needed on a single screen.
* Also worth mentioning: you may choose to use the presets file to create new variations of this component.
* Don't forget to add all props in the interface file!
*/

import React, { useState } from "react"
import "../styles/App.css"
import { Footer } from "./footer";
import { Header } from "./header";

export const Home = () => {
    const [isFormSubmitted] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

    const onSubmit = (data) => {
    };

    return (
        <div className={"App"}>
            <Header />
            <div className={'screenBody'}>
                <iframe
                    title='nft'
                    src="https://gateway.ipfscdn.io/ipfs/QmbqEq5EQLx1aPurZFreM246fsKeawfpKDT8uzguAHAikr/erc1155.html?contract=0x38ccD5B179Db21e8C896704cb019af3AF9Eeb89F&chainId=137&tokenId=0&primaryColor=pink"
                    width='90%'
                    height="600px"
                    style={{ maxWidth: '100%', marginTop: '5%' }}
                    frameborder="0"
                ></iframe>
            </div>
            <div style={{ flexDirection: 'row', columnCount: 2 }}>
                <div>
                    <iframe width='90%' height='600' src="https://www.youtube.com/embed/tOISAP97_dk" title="Marriage DAO 💍 Miami Hack Week 🌴" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <a href={'https://github.com/Zernach/marriage-dao-mobile'}>
                        <img className="gif" src={'https://github.com/Zernach/zernach.github.io/raw/main/images/gifs/Marriage%20DAO%20%F0%9F%92%8D%20Consumate%20Your%20Marriage%20on%20the%20Blockchain%20%F0%9F%93%B1%20iOS_Android%20React%20Native%20Expo%20App.gif?raw=true'} alt={'marriageDAO'} style={{ marginBottom: '5%', marginTop: 0 }} />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};
