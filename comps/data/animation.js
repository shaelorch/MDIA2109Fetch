import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
from {
    opacity:0;
}
to {
    opacity:1;
}

`;

export const fadeOut = keyframes`
from {
    opacity:1;
}
to {
    opacity:0;
}
`;

export const bounceIn = keyframes`
0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-30px);} 
   60% {transform: translateY(-15px);} 
`;

export const wiggleIn = keyframes`
0% {-webkit-transform: rotate(2deg);}
25% {-webkit-transform: rotate(-2deg);}
50% {-webkit-transform: rotate(2deg);}
75% {-webkit-transform: rotate(-2deg);}
100% {-webkit-transform: rotate(0deg);}

`;

export const wiggleInTail = keyframes`
0% {-webkit-transform: rotate(20deg);}
25% {-webkit-transform: rotate(-20deg);}
50% {-webkit-transform: rotate(20deg);}
75% {-webkit-transform: rotate(-20deg);}
100% {-webkit-transform: rotate(0deg);}

`;
