/*
* Generally, components should not contain internal state/logic!
* Generally, we want all state/logic variables to be in the screen-functions.ts files so we have access to them all in one place.
* This is because we want to be able to easily change the state/logic of the screen in one place.
* It is okay to include internal state/logic if multiple instances of the component are needed on a single screen.
* Also worth mentioning: you may choose to use the presets file to create new variations of this component.
* Don't forget to add all props in the interface file!
*/

import "../styles/App.css"
import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className="flexed" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className={'headerSection'}>
                    <h1 className="webTitle" style={{ color: '#f7e2ad' }} >
                        {"MARRIAGE DAO"}
                    </h1>
                    <h3 className="subtitle" style={{ color: '#ffffff' }}>
                        <i>{'Make Your Marriage Official on the Blockchain'}</i>
                    </h3>
                </div>
                <div className={'headerSection'}>
                    <img src={require('../assets/stem_icons_dark.png')} className="app-icon" alt="app-icon" style={{}} />
                </div>
                <div className={'headerSection'}>
                    <h3 className="subtitle" style={{ color: '#ffffff' }}>
                        <i>{'Agree to a contract with your spouse. This blockchain contract crosses state/country lines, unlike traditional prenuptual agreements.'}</i>
                    </h3>
                </div>
            </div>
        </header>
    );
};
