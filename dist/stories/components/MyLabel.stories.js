"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' }
    }
};
exports.default = meta;
// Con esto creamos una copia del Template para cada uno de los distintos tipos 'Basic', 'AllCaps', 'Secondary'
exports.Basic = {
    args: {
        label: 'My Label',
        size: 'normal'
    }
};
exports.AllCaps = {
    args: {
        label: 'My Label',
        size: 'normal',
        allCaps: true,
    }
};
exports.Secondary = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'secondary'
    }
};
exports.Tertiary = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'tertiary'
    }
};
// export const AllCaps = Template.bind({})
// export const Secondary = Template.bind({})
exports.CustomFontColor = {
    args: {
        size: 'h1',
        label: 'My Label',
        fontColor: '#5517ac'
    }
};
exports.CustomBackgroundColor = {
    args: {
        size: 'h1',
        label: 'My Label',
        fontColor: '#eee',
        backgroundColor: '#000'
    }
};
