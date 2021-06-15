import * as React from 'react';
import { IContextualMenuProps, Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import './GroupFilter.css';

export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
}

const menuProps: IContextualMenuProps = {
    items: [
        {
            key: 'Due Date',
            text: 'Due Date',
        },
        {
            key: 'Progress',
            text: 'Progress',
        },
    ],
};
// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

const GroupFilter: React.FunctionComponent<IButtonExampleProps> = props => {
    const { disabled, checked } = props;

    return (
        <Stack className="group-filter"
            horizontal wrap tokens={stackTokens}>
            <DefaultButton
                text="Filter"
                split
                splitButtonAriaLabel="See 2 options"
                aria-roledescription="split button"
                menuProps={menuProps}
                // onClick={_alertClicked}
                disabled={disabled}
                checked={checked}
            />

            <DefaultButton
                text="Group by"
                split
                splitButtonAriaLabel="See 2 options"
                aria-roledescription="split button"
                menuProps={menuProps}
                // onClick={_alertClicked}
                disabled={disabled}
                checked={checked}
            />

        </Stack>
    );
};


export default GroupFilter;
