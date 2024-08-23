import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// mapで画像を持ってみる
const cards = [
    {
        title: 'cats',
        description: 'scotish fold',
        image: 'https://user0514.cdnw.net/shared/img/thumb/nekocyanPAKE4500-430_TP_V.jpg'
    },
    {
        title: 'dogs',
        description: 'poodle',
        image: 'https://user0514.cdnw.net/shared/img/thumb/kotetsuPAR514132001_TP_V.jpg'
    },
    {
        title: 'birds',
        description: 'hato',
        image: 'https://user0514.cdnw.net/shared/img/thumb/masakanoIMG_1879_TP_V.jpg'
    }
]
export default function MediaCard() {
    return (
        <Grid container spacing={2}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image={card.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {card.title}
                            </Typography>
                            <Typography variant="body1" color="green">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}