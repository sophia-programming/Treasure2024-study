import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface CardData {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function MediaCard() {
    const [cards, setCards] = React.useState<CardData[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/cards')
            .then((res) => res.json())
            .then((data) => setCards(data))
            .catch(error => console.error('Error fetching cards:', error));
    }, []);

    return (
        <Grid container spacing={2}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
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