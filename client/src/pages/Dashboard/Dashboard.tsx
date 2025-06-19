import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Box,
  Button,
  CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchBands } from '../../store/slices/bandsSlice';
import { fetchUpcomingRehearsals } from '../../store/slices/rehearsalsSlice';
import { AppDispatch, RootState } from '../../store';
import UpcomingRehearsalsCard from './components/UpcomingRehearsalsCard';
import BandsOverviewCard from './components/BandsOverviewCard';
import RehearsalAttendanceCard from './components/RehearsalAttendanceCard';
import SongPracticeCard from './components/SongPracticeCard';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { bands, loading: bandsLoading } = useSelector((state: RootState) => state.bands);
  const { upcomingRehearsals, loading: rehearsalsLoading } = useSelector(
    (state: RootState) => state.rehearsals
  );

  useEffect(() => {
    dispatch(fetchBands());
    dispatch(fetchUpcomingRehearsals());
  }, [dispatch]);

  if (bandsLoading || rehearsalsLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  const hasBands = bands && bands.length > 0;

  return (
    <Container maxWidth="lg">
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.first_name || 'Musician'}!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Here's an overview of your musical activities
        </Typography>
      </Box>

      {!hasBands ? (
        <Card sx={{ mb: 4, p: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Get Started with Rehearsal Scheduler
            </Typography>
            <Typography variant="body1" paragraph>
              It looks like you haven't created or joined any bands yet. To get started, create your first band.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={Link} 
              to="/bands"
            >
              Create Your First Band
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <UpcomingRehearsalsCard rehearsals={upcomingRehearsals} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BandsOverviewCard bands={bands} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RehearsalAttendanceCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <SongPracticeCard />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;