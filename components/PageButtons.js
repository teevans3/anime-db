import {Pagination} from '@material-ui/lab';
import {styled} from '@material-ui/core/styles';
import {usePage, useUpdatePage} from '../context/PageContext';

const PageButtons = (props) => {
    const page = usePage();
    const updatePage = useUpdatePage();

    return (
        <PaginationContainer count={Math.ceil(props.pageInfo.total / 10) - 1} onChange={(e, page) => updatePage(page)} page={page} size="large">
        </PaginationContainer>
    )
}

const PaginationContainer = styled(Pagination)({
    display: 'flex',
    justifyContent: 'center',
    height: '4rem',
    width: '100%',
    '& button, & div': {
        color: 'white',
        '&:hover': {
            backgroundColor: '#161616',
        }
    },
    '& .Mui-selected': {
        backgroundColor: '#161616',
        '&:hover': {
            backgroundColor: '#161616',
        }
    },
    
})

export default PageButtons;
