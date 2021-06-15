import * as React from 'react';
//import { useState } from 'react';
import { Pivot, PivotItem } from '@fluentui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Task from '../TaskAddDelete/Task';



const PivotTabs = () => {
    const [selectedKey, setSelectedKey] = React.useState();


    const handleLinkClick = (selectedKey) => {
        if (selectedKey === "2") { <Calendar /> }
        else
            <Task />
    };

    return (
        <Pivot
            aria-label="Basic Pivot Example"
            selectedKey={selectedKey}

        >
            <PivotItem
                headerText="Board"
                selectedKey={() => setSelectedKey("1")}
                onLinkClick={handleLinkClick({ selectedKey })}          >
            </PivotItem>

            <PivotItem
                headerText="Calendar"
                selectedKey={() => setSelectedKey("2")}
                onLinkClick={handleLinkClick({ selectedKey })}
            // componentRef
            // onLinkClick={<Calendar />}
            // headerButtonProps={
            //     < Calendar
            //         onChange={onChange}
            //         value={value}
            //     />
            // }
            // onRenderItemLink={displayCalendar}
            >
            </PivotItem>

        </Pivot >

    );

};

export default PivotTabs;