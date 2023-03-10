import { Card, Grid, TextField } from '@mui/material';
import React from 'react';
import { FC } from 'react';
// import Button from '../../../../ui/button/normal/ButtonStatik';
import styles from './Adddoc.module.scss';
// import {Card, Grid} from'@material-ui/core'
// import StepWrapper from './../../../StepWrapper';
import Button from './../../../../ui/button/normal/ButtonStatik';
import { useState } from 'react';
import UploadFile from './UploadFile';

const Adddocum: FC = () => {
	const [activeStep, setActiveStep] = useState(0)
	const next = () => {
		if (activeStep !== 1) {
			setActiveStep(prev => prev + 1)
		}
	}
	const back = () => {
		setActiveStep(prev => prev - 1)

	}

	return (
		<>
			{/* <h1 className={styles.h1}>Add document</h1>
			<StepWrapper activeStep={activeStep}>
				{activeStep === 0 &&
					<Grid container direction={'column'} style={{ padding: 20 }}>
						<TextField label={"Document name"} />
						<TextField label={"Shop name"} />
						<TextField label={"City"} />
						<TextField label={"Price"} />
						<TextField type='date' />
					</Grid>
				}{activeStep === 1 &&
					<Grid container direction={'column'} style={{ padding: 20 }}>
						<UploadFile file='' setFile={() => ({})} accept='document/*'>
							<Button>
								Upload document file
							</Button>
						</UploadFile>,
					</Grid>
				}
			</StepWrapper>
			<div className={styles.nextback}>
				<Button disabled={activeStep === 0} onClick={back}>Back</Button>
				<Button onClick={next}>Next</Button>
			</div> */}
		</>
	);
};

export default Adddocum;