import { List, ListItem, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResultsContext } from '../../context/ResultsContext';
import "./style/Review.css"

/**
*  Review
*/
const ReviewPage = () => {
    const { results } = useContext(ResultsContext);
    return (
        <div>
            <h1>오답노트</h1>
            <div className='reviewlist'>
                <List sx={{
                    margin: "auto",
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    borderRadius: '1rem'
                }}>
                    {results.map((e, i) => {
                        return (
                            <>
                                <Link
                                    to="/review/detail" state={{ result: e, index: i }}
                                    style={{ textDecorationLine: "none" }}
                                    key={i.toString}>
                                    <ListItem alignItems="flex-start">
                                        {i}번째 퀴즈
                                    </ListItem>
                                </Link>
                                <Divider variant="inset" component="li" />
                            </>
                        );
                    })}
                </List>
            </div>

        </div>
    );
}

export default ReviewPage;
