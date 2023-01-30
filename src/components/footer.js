/*
* Generally, components should not contain internal state/logic!
* Generally, we want all state/logic variables to be in the screen-functions.ts files so we have access to them all in one place.
* This is because we want to be able to easily change the state/logic of the screen in one place.
* It is okay to include internal state/logic if multiple instances of the component are needed on a single screen.
* Also worth mentioning: you may choose to use the presets file to create new variations of this component.
* Don't forget to add all props in the interface file!
*/

import * as React from "react"

/**
 * Describe the new component here...
 */
export const Footer = () => {
    return (
        <footer>
            <div className={'footerSection'}>
                <div style={{ flexDirection: 'row' }}>
                    {/* <a href={'https://apps.apple.com/us/app/stem-tech-network/id1612728604'}> */}
                    <img src={require('../assets/download-on-apple-apple-store-stem-tech-network.png')} className="App-logo-footer" alt="logo" />
                    {/* </a> */}
                    {/* <a href={'https://play.google.com/store/apps/details?id=com.zernach.stem'}> */}
                    <img src={require('../assets/get-it-on-google-playstore-app-stem-tech-network.png')} className="App-logo-footer" alt="logo" />
                    {/* </a> */}
                </div>
            </div>
            <div style={{ paddingTop: 2, paddingBottom: 5 }}>
                <p style={{ color: '#ffffff99' }}>
                    {'Brought to You by '}
                    <a href={'https://www.daohouse.org/'} style={{ color: '#f7e2ad99' }}>
                        {"DAO House"}
                    </a>
                </p>
                <p style={{ color: '#ffffff99' }}>
                    <a href={'https://www.miamihackweek.com/'} style={{ color: '#ff69b4' }}>
                        {"Miami Hack Week"}
                    </a>
                    {" 🌴"}
                </p>
                <p style={{ color: '#ffffff99' }}>
                    {'All Rights Reserved 2023 © '}
                    <a href={'/privacy-policy'} style={{ color: '#f7e2ad99' }}>
                        {" Privacy Policy"}
                    </a>
                </p>
            </div>
        </footer>
    )
}
