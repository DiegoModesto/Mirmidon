import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

import {
    VulnerabilityLevel,
    ChartVulnerability
} from './components'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    }
}))

const Dashboard = () => {
    const classes = useStyles()
    
    //TODO: Buscar do serviço do dashboard
    const chartData = {
        labels: ['Crítico', 'Alto', 'Médio', 'Baixo'],
        datasets: [
            {
                data: [5,
                    5,
                    10,
                    20
                ],
                backgroundColor: [
                    'rgba(26,26,26,.7)', 
                    'rgba(173,0,0,.7)', 
                    'rgba(114,37,78,.7)', 
                    'rgba(255,245,0,.7)', 
                ],
                hoverBackgroundColor: [
                    'rgba(26,26,26,1)', 
                    'rgba(173,0,0,1)', 
                    'rgba(114,37,78,1)', 
                    'rgba(255,245,0,1)', 
                ],
            }
        ]
    }

    return(
        <div className={classes.root}>
            <Grid
                container
                spacing={4}
            >
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <VulnerabilityLevel data={{title: 'Critical', value: 3, percentage: '5%', shortDescription: 'of critical vulnerabilites', level: 0}} />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <VulnerabilityLevel data={{title: 'High', value: 12, percentage: '5%', shortDescription: 'of high vulnerabilites', level: 1}} />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <VulnerabilityLevel data={{title: 'Middle', value: 41, percentage: '10%', shortDescription: 'of middle vulnerabilites', level: 2}} />
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >
                    <VulnerabilityLevel data={{title: 'Low', value: 83, percentage: '20%', shortDescription: 'of critical vulnerabilites', level: 3}} />
                </Grid>
                
                <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                >
                    <ChartVulnerability data={chartData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard