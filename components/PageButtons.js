import {Pagination} from '@material-ui/lab';
import {styled} from '@material-ui/core/styles';
import {useUpdatePage} from '../PageContext';



export const PageButtons = (props) => {
    const updatePage = useUpdatePage();

    return (
        <PaginationContainer count={Math.ceil(props.pageInfo.total / 10) - 1} onChange={(e, page) => updatePage(page)}>
        </PaginationContainer>
    )
}

const PaginationContainer = styled(Pagination)({
    display: 'flex',
    justifyContent: 'center',
    height: '4rem',
    position: 'absolute',
    bottom: '0',
    width: '100%',
})

export default PageButtons;
