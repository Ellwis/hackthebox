import React from 'react'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import CardComponent from './cards/Card'
import CardTwo from './cards/CardTwo'
import SwipperBox from './swipper/SwipperBox'

function SectionTwo() {
	return (
		<>
			<Box sx={{
				bgcolor: '#rgb(11,18,31)',
				width: '100%',
				p: 5,
			}}>
				<Box sx={{
					display: 'flex',
					justifyContent: 'center'
				}}>
					<SwipperBox />
				</Box>
				<Box>
					<Box sx={{ my: 8 }}>
						<Typography variant='h3' textAlign={'center'} fontWeight={'bold'}>Latest from our blog</Typography>
						<Typography textAlign={'center'} color={'rgb(159,239,0)'}>Read customer stories</Typography>
					</Box>
					<Box sx={{ display: { md: 'flex', xs: 'block' }, width: '90%', mx: 'auto', justifyContent: 'space-between' }}>
						<CardTwo src='/1.jpg' title='NEWS' desc='How to become a cybersecurity engineer: ultimate career guide ' />
						<CardTwo src='/2.jpg' title='HACKERS' desc='How to become a cybersecurity engineer: ultimate career guide ' />
						<CardTwo src='/3.jpg' title='CUSTOMER STORIES' desc='How to become a cybersecurity engineer: ultimate career guide ' />

					</Box>
				</Box>

			</Box>
			<Box sx={{
				width: '100%',
				display: {xs: 'block' , md : 'flex'},
				textAlign :'center',
				borderBottom :'1px solid #202837',
				


			}}>
				<Box sx={{ border: '1px solid #202837', width: { md :'33%' , xs : '100%'},p: 5 }}>
					<Typography variant='h5' fontWeight={'bold'} mb={2}>For Hackers</Typography>
					<Typography fontSize={'16px'} color={'#6C778D'} mb={5}>1k+ teams upskilled</Typography>
					<Typography>Get Demo </Typography>
				</Box>
				<Box sx={{ border: '1px solid #202837', width: { md :'33%' , xs : '100%'},p: 5 }}>
					<Typography variant='h5' fontWeight={'bold'} mb={2}>For Business</Typography>
					<Typography fontSize={'16px'} color={'#6C778D'} mb={5}>1m+ teams upskilled</Typography>
					<Typography>Get Demo</Typography>
				</Box>
				<Box sx={{ border: '1px solid #202837', width: { md :'33%' , xs : '100%'},p: 5 }}>
					<Typography variant='h5' fontWeight={'bold'} mb={2}>For Academia</Typography>
					<Typography fontSize={'16px'} color={'#6C778D'} mb={5}>85 universities enrolledlorem</Typography>
					<Typography>Get Demo </Typography>
				</Box>
			</Box>

		</>
	)
}

export default SectionTwo