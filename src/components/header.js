/*
* Generally, components should not contain internal state/logic!
* Generally, we want all state/logic variables to be in the screen-functions.ts files so we have access to them all in one place.
* This is because we want to be able to easily change the state/logic of the screen in one place.
* It is okay to include internal state/logic if multiple instances of the component are needed on a single screen.
* Also worth mentioning: you may choose to use the presets file to create new variations of this component.
* Don't forget to add all props in the interface file!
*/

import "../styles/App.css"
import React, { useEffect, useState } from 'react';

/**
 * Describe the new component here...
 */
export const Header = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Install metamask please");
                return;
            }
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const disconnectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("get metamask plz");
                return;
            }
            setCurrentAccount("");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        connectWallet();
    }, [])

    return (
        <header>
            <div className="flexed" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className={'headerSection'}>
                    <h1 className="webTitle" style={{ color: '#f7e2ad' }} >
                        {"MARRIAGE DAO"}
                    </h1>
                    <h3 className="subtitle" style={{ color: '#ffffff' }}>
                        <i>{'Improving Marriage with the Blockchain'}</i>
                    </h3>
                </div>
                <div className={'headerSection'}>
                    <img src={require('../assets/stem_icons_dark.png')} className="app-icon" alt="app-icon" style={{}} />
                </div>
                <div className={'headerSection'}>
                    <div style={{ flexDirection: 'row' }}>
                        {currentAccount && (
                            <button onClick={disconnectWallet}>
                                🦊 Disconnect {currentAccount.substring(0, 6)}...
                            </button>
                        )}
                        {!currentAccount && (
                            <button onClick={connectWallet}>
                                🦊 Connect Metamask Wallet
                            </button>
                        )}
                        {/* <a href={'https://apps.apple.com/us/app/stem-tech-network/id1612728604'}>
                            <img src={require('../assets/download-on-apple-apple-store-stem-tech-network.png')} className="App-logo" alt="logo" />
                        </a>
                        <a href={'https://play.google.com/store/apps/details?id=com.zernach.stem'}>
                            <img src={require('../assets/get-it-on-google-playstore-app-stem-tech-network.png')} className="App-logo" alt="logo" />
                        </a> */}
                    </div>
                </div>
            </div>
        </header>
    );
};
