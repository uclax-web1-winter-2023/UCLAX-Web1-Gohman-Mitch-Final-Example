import styled from 'styled-components';

/* Components ---------------------------*/
import Head from '@/Layout/Head.jsx';
import Inset from '@/Layout/Inset.jsx';
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled EssaysName="Essays">
            <Head title="Essays" />
            <Inset>
                <h1>Essays</h1>

                <Essay q='Q1: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q2: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q3: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q4: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q5: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q6: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>

                <Essay q='Q7: Sample question...'>
                    <p>Answer goes here...</p>
                </Essay>



            </Inset>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
