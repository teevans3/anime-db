import Link from 'next/link';
import {Grid, Button} from '@material-ui/core';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {styled} from '@material-ui/core/styles';


export const PageButtons = (props) => {    

    return (
        <PaginationContainer count={Math.ceil(props.pageInfo.total / 10) - 1} onChange={(e, page) => props.setCurrentPage(page)}>
            <PaginationItem component={Link} href="/anime/[pageNum]" as={`/anime/${props.pageInfo.currentPage - 1}`} passHref>
            </PaginationItem>
            <PaginationItem disabled size="large" style={{color: 'black'}}>
                {props.pageInfo.currentPage}
            </PaginationItem>
            {props.pageInfo.hasNextPage ? 
            <Link href="/anime/[pageNum]" as={`/anime/${props.pageInfo.currentPage + 1}`} passHref>
                <Button>→</Button>
            </Link>
            : null}
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
