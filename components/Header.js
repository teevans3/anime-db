import Link from 'next/link';
import {Grid} from '@material-ui/core'
import {styled} from '@material-ui/core/styles';

const Header = () => {
    return (
            <HeaderContainer item xs={12}>
                <Link href="/" passHref >
                    Anime Database
                </Link>
            </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled(Grid)({
    fontFamily: 'Georgia, sans-serif',
    fontSize: '3rem',
    height: '6rem',
    padding: '1rem 2rem',
    backgroundColor: '#161616',
    margin: 'auto',
    color: 'white',
})