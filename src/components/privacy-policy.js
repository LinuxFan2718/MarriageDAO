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
import { Footer } from "./footer";
import { globalStyles } from '../styles/styles.js'

/**
 * Describe the new component here...
 */
export const PrivacyPolicy = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={require('../assets/stem_icons_dark.png')} className="app-icon" alt="app-icon" style={{ marginTop: 30 }} />
                <h1 className="stemTitle">
                    <span style={{ color: '#f7e2ad' }}>{'MARRIAGE DAO'}</span>
                </h1>
                <h3 className="techNetwork">
                    <span>{'Improving Marriage with the Blockchain'}</span>
                </h3>
                <p className="subtitle" style={{ color: '#ffffff' }}><i>{'Terms, Conditions, & Privacy Policy'}</i></p>
                <p className="subtitle" style={{ color: '#ffffff' }}><i>{'End-User License Agreement (EULA)'}</i></p>
                <div style={{ marginRight: '20%', marginLeft: '20%', ...globalStyles.blackBox }}>
                    <p className="comingSoon" style={{ color: "#f7e2ad", fontSize: 22, fontWeight: 'bold', marginBottom: 50, marginTop: 20 }}>
                        {'The most important part of this agreement is that there is no tolerance for objectionable content or abusive users on this platform.'}
                    </p>
                    {`${`Marriage DAO processes your Personal Data with our website & mobile app only in accordance with applicable data protection and privacy laws.

We provide a wedding officiation platform & social network for people interested in vesting in their marriage using the blockchain. By creating an account with our software, you agree that you may neither sue nor hold us liable in any way for content that is posted by any of our users.

Your permission will be requested to receive notifications. Your account may be associated with multiple devices, but a single device may only be associated with a single user.

When you share a post, your permission will also be requested to use your device's camera/microphone for capturing images, videos, and audio to include in your post.

Any unique content that any of our users share in our social learning network becomes our property — meaning, we have the right to use that content in any way we see fit — including, but not limited to, posting it on our website, using it in our marketing materials, etc.

We reserve the right to remove any content that we deem to be inappropriate, and we reserve the right to terminate any user's account at any time for any reason. This includes, but is not limited to, any user who violates our terms of agreement, who posts objectionable content, or who is abusive to other users.

We also reserve the right to change these terms of agreement at any time by posting them here on our website.`}`.split('\n').filter((word) => word !== '').map((phrase, phraseIndex) => (
                        <p key={`index${phraseIndex}`} className="comingSoon" style={{ color: "#ffffff" }}>
                            {phrase}
                        </p>
                    ))}
                </div>
            </header>
            <Footer />
        </div >
    );
};
