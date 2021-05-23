import React, { useState } from 'react';
import Select from 'react-select'

function Bgcolor() 
{
    var colors = [
        {
            value: 1,
            label: "red"
        },
        {
            value: 2,
            label: "blue"
        },
        {
            value: 3,
            label: "green"
        },
        {
            value: 4,
            label: "orange"
        },
    ];
    var [setbgcolor, ddlvalue] = useState(colors.label);
    var ddlhandle = e => 
    {
        ddlvalue(e.label);
    }
    return (
        <div>
            <style>{'body {background-colour:' + setbgcolor + ';}'}</style>
            <Select options={colors} onChange={ddlhandle}> </Select>
            <center>
                <b>
                    The Background color is : {this.setbgcolor({colors})}
                </b>
            </center>
        </div>
    )
}
export default Bgcolor;