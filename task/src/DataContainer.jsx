import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DataContainer = ({ searchData }) => {
  return (
    <div>
      {searchData.map((data) => (
        <Card key={data.id} sx={{ margin: '10px', maxWidth: 900 }}>
          <CardContent>
            <Typography variant="h5" style={{fontWeight:700}} gutterBottom>
              {data.title}
            </Typography>
            <Typography color="darkBlue">
              {data.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DataContainer;
