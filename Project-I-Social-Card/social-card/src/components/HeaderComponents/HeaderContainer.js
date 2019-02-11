import React from 'react';
import './Header.css';
import HeaderThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return(
        <div className="HeaderContainer">
            <HeaderThumbnail />
            <div className="HeaderContent">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;