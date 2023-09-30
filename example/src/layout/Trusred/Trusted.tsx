import styled from 'styled-components';
import {Grid, Container} from 'bear-react-grid';
import TrustedCard from '@/layout/Trusred/_components/TrustedCard';
import CourseButton from '@/layout/_components/CourseButton';

interface IProps extends FCProps {

}

const Trusted = ({
    className,
}: IProps) => {
    return <TrustedRoot className={className}>
        <Grid gap="60px">

            <FeatureList gap="60px">
                {Array.from({length: 2}).map((row, index) => {
                    return <TrustedCard key={`trusted_${index}`}/>;
                })}
            </FeatureList>

            <Info columns={1}>
                <SubTitle>TRUSTED BY TEAMS</SubTitle>
                <Title>110,000 people</Title>
                <Desc>Many startups look for designers who code and developers who design. They use our courses to help train new hires and expand skill sets.</Desc>

                <CourseButton isOutline>
                    <img src="https://designcode.io/images/icons/chat.svg" alt="Create account"/>
                    <span>More stories</span>
                </CourseButton>
            </Info>

        </Grid>
    </TrustedRoot>;
};

export default Trusted;




const FeatureList = styled(Grid)`

`;

const Desc = styled.div`
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 40px;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
`;


const Info = styled(Grid)`
    width: 360px;
`;



const TrustedRoot = styled(Container)`
    height: 400px;
`;
