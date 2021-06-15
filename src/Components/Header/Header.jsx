import React from 'react';
import './Header.css';
import { Icon } from '@fluentui/react/lib/Icon';
import userphoto from './userphoto.jpg'
import PivotTabs from '../PivotTabs/PivotTabs';
import GroupFilter from '../Group&Filter/GroupFilter';

const username = "Srishti Sharma"

const Header = () => {
    return (
        <div>
            <div className="head-container">
                <Icon
                    className="logo-icon"
                    iconName="TaskManager"
                />

                <img
                    className="user-photo"
                    src={userphoto} width="60" height="60" alt="logo"
                />

                <h1 className="head-text">My Tasks</h1>
                <h2 className="subtitle">My Tasks</h2>

                <p className="para">{username}</p>

            </div>


            <PivotTabs />
            <GroupFilter />


        </div>
    )
}

export default Header;