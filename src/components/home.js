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
                    src="https://gateway.ipfscdn.io/ipfs/QmbqEq5EQLx1aPurZFreM246fsKeawfpKDT8uzguAHAikr/erc1155.html?contract=0x38ccD5B179Db21e8C896704cb019af3AF9Eeb89F&chainId=137&tokenId=0"
                    width='90%'
                    height="600px"
                    style={{ maxWidth: '100%', marginTop: '5%' }}
                    frameborder="0"
                ></iframe>
            </div>
            <img className="gif" src={'https://github.com/Zernach/zernach.github.io/blob/master/images/marriage-dao-demo-gif-expo-react-native-walletconnect.gif?raw=true'} alt={'marriageDAO'} style={{ marginBottom: '5%', marginTop: 0 }} />
            <Footer />
        </div>
    );
};
