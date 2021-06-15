import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { TextField } from '@fluentui/react/lib/TextField';
import { DatePicker, DayOfWeek } from '@fluentui/react';
import PeoplePicker from './PeoplePicker.tsx';

const dialogStyles = { main: { maxWidth: 450 } };
const dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu,
    keepInBounds: true,
};

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Task Details',
};

function DialogBox() {
    const [newItem, setNewItem] = useState('');
    const [list, setList] = useState([]);
    // const [DueDate, setDueDate] = useState('');
    // const [assign, setAssign] = useState('');
    // const [isDone, setIsDone] = useState(false);

    const [firstDayOfWeek] = useState(DayOfWeek.Sunday);

    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [isDraggable] = useBoolean(false);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');


    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles,
            dragOptions: isDraggable ? dragOptions : undefined,
        }),
        [isDraggable, labelId, subTextId],
    );

    function addItem(todoValue) {
        if (todoValue !== " ") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false,
            }
            const list = setList;
            list.push(newItem);
            list.setState({
                list,
                newItem: ""
            })
        }
    }

    function updateInput(input) {
        list.setState({ newItem: input })
    }

    return (

        <div classname="container" >
            <br />
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Add Task Dialog Box" />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modalProps}
            >

                <TextField
                    placeholder={'Enter task name'}
                    label="Task Name"
                // value={newItem}
                // onChange={e => updateInput(e.target.value)}
                // value={value}
                // onChangeText={onTextChange}
                />

                <TextField
                    label="To Do"
                />

                <DatePicker
                    label="Due date"
                    placeholder="Set due date"
                    firstDayOfWeek={firstDayOfWeek}
                    ariaLabel="Select a date"
                />

                <PeoplePicker />

                <DialogFooter>
                    <PrimaryButton
                        onClick={toggleHideDialog}
                        // onClick={() => addItem(newItem)}
                        disable={!newItem.length}
                        text="Add Task"
                    />
                </DialogFooter>

            </Dialog>
        </div >
    );

};

export default DialogBox;
