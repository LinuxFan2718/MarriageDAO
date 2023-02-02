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
                    width="600px"
                    height="600px"
                    style={{maxWidth: '100%'}}
                    frameborder="0"
                ></iframe>
                <form onSubmit={(event) => { event.preventDefault(); onSubmit(event.data) }} style={{ marginTop: '10%', marginRight: '5%', marginLeft: '5%' }}>
                    {isFormSubmitted ?
                        <>
                            <p style={{ fontSize: 50, }}>✅</p>
                            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 'bold', marginTop: '-20px' }}>{`Submitted. Thank you!`}</p>
                            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 'bold' }}>{`We will keep you informed.`}</p>
                            <p style={{ color: "#f7e2ad", fontSize: 20, fontWeight: 'bold' }}>{`Marriage DAO`}</p>
                        </>
                        :
                        <>
                            <p style={{ color: "#ffffff", fontSize: 20, fontWeight: 'bold' }}>Show Your Interest</p>
                            <p style={{ color: "#ffffff", fontSize: 16 }}>Sign Up for Our Email List</p>
                            <br />
                            <input
                                placeholder="👤 Name"
                                type={'text'}
                                value={firstName || ''}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <br />
                            <input
                                placeholder="✉️ Email"
                                type={'text'}
                                value={email || ''}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <input
                                placeholder="📍 City"
                                type={'text'}
                                value={city || ''}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <br />
                            <input type="submit" />
                        </>
                    }
                </form>
                {/* <div className={"centerEverything"} style={globalStyles.blackBox}>
                    <div style={{ padding: 5, borderRadius: 10, marginLeft: '10vw', marginRight: '10vw' }}>
                    </div>
                </div> */}

            </div>
            <Footer />
        </div>
    );
};
