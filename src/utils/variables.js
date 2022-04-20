import {rgba} from "polished";

export const boxShadow = p => {
    return `box-shadow: ${rgba(p.theme.secondaryColor, 0.5)} 0 5px 10px 0;`
};

export const radius = {
    tiny: '5px',
    small: '15px',
    medium: '50px',
    high: '50%',
};
