// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getAllGames } from '../fake-api';

export function App() {
  return (
    <div className='container'>
      <div className='games-layout'>
        {getAllGames().map((boardGame) => (
          <Card key={boardGame.id} className="game-card">
            <CardActionArea>
              <CardMedia
                className='game-card-media'
                image={boardGame.image}
                title={boardGame.name} />
              <CardContent className=''>
                <Typography gutterBottom variant="h5" component="h2">
                  {boardGame.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {boardGame.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="game-rating">
                  <strong>Rating: </strong> {boardGame.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
