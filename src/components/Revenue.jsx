import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material'
import { tokens } from "@/app/theme";


    const Revenue = () => {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
        const bardata = [
            {
                "bulan": "Jan",
                "revenue": 2500000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Feb",
                "revenue": 6300000,
                "revenueColor": "hsl(179, 70%, 50%)",

            },
            {
                "bulan": "Mar",
                "revenue": 3400000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Apr",
                "revenue": 6600000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Mei",
                "revenue": 4300000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Jun",
                "revenue": 9100000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Jul",
                "revenue": 9700000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Agu",
                "revenue": 5600000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Sep",
                "revenue": 9800000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Okt",
                "revenue": 4500000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Nov",
                "revenue": 6700000,
                "revenueColor": "hsl(179, 70%, 50%)",
            },
            {
                "bulan": "Des",
                "revenue": 8000000,
                "revenueColor": "hsl(179, 70%, 50%)",
            }
          ]

          const MyResponsiveBar = ({data}) => (
            <ResponsiveBar
                data={data}
                keys={[
                    'revenue',
                ]}
                indexBy="bulan"
                margin={{ top: 50, right: 130, bottom: 50, left: 85 }}
                padding={0.2}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                valueFormat=" >-,"
                colors={{ scheme: 'nivo' }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Bulan',
                    legendPosition: 'middle',
                    legendOffset: 36,

                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Total Revenue',
                    legendPosition: 'middle',
                    legendOffset: -70
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                motionConfig="gentle"
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in bulan: "+e.indexValue}
            />
        )


        return(
            <Box style={{ height: '450px', backgroundColor:`${colors.grey[300]}` }}>
                <MyResponsiveBar data={bardata}/>
            </Box>
        )
}


export default Revenue