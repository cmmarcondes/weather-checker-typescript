import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BoxText, NotFoundContainer, Redirectioner, FourOFour } from '../styles/notfoundstyles';

const NotFound = () => {
    const history = useHistory();
    const change_page = () => {
            history.push('/')
    }

    useEffect(()=>{
        setTimeout(()=>{
            change_page();
        }, 1000*7);
    })
    return(
        <NotFoundContainer>
            <FourOFour>
                404
            </FourOFour>
            <BoxText>
                Parece que a cidade que você procurou não existe...
            </BoxText>
            <Redirectioner>
                Você será redirecionado em alguns segundos...
            </Redirectioner>
        </NotFoundContainer>
    );
}

export default NotFound;