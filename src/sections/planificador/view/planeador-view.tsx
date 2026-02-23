import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

export function PlaneadorView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant='h4'>
        Mi planificador diario
      </Typography>
    </DashboardContent>
  );
}
