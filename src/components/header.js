/*
* Generally, components should not contain internal state/logic!
* Generally, we want all state/logic variables to be in the screen-functions.ts files so we have access to them all in one place.
* This is because we want to be able to easily change the state/logic of the screen in one place.
* It is okay to include internal state/logic if multiple instances of the component are needed on a single screen.
* Also worth mentioning: you may choose to use the presets file to create new variations of this component.
* Don't forget to add all props in the interface file!
*/

import * as React from "react"
import "../styles/App.css"

/**
 * Describe the new component here...
 */
export const Header = () => {

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
                        {/* <a href={'https://apps.apple.com/us/app/stem-tech-network/id1612728604'}> */}
                        <img src={require('../assets/download-on-apple-apple-store-stem-tech-network.png')} className="App-logo" alt="logo" />
                        {/* </a> */}
                        {/* <a href={'https://play.google.com/store/apps/details?id=com.zernach.stem'}> */}
                        <img src={require('../assets/get-it-on-google-playstore-app-stem-tech-network.png')} className="App-logo" alt="logo" />
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </header>
    );
};
