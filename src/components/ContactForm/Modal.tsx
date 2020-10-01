import React, { FunctionComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
import { Button, Grid, Typography } from '@material-ui/core';
import { IProjects } from '../ProjectList/constants';
import { StyledLink } from '../../styles/StyledLink';


interface ModalProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledModal = styled(Dialog)`
.MuiDialog-paper {
          border-radius: 16px;
                    box-shadow: ${({ theme }) => theme.shadows.primary};

}
     .main-container {
          background: ${({ theme }) => theme.colors.background};
          padding: 20px;
     }
img {
padding: 20px;
          border-radius: 16px;
        height: auto;
        width: 100%;
  
    }     
`;
const Skill = styled.span`
  display: inline-flex;
  padding: 6px;
  border-radius: 7px;
  margin-block-end: 7px;
  margin-inline-end: 7px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

const MuiModal: FunctionComponent<ModalProps & IProjects> = ({ open, stack, setOpen, img, title, subtitle, description, demoURL, gitURL }) => {

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledModal open={open}
                     onClose={handleClose}
                     aria-labelledby="simple-modal-title"
                     aria-describedby="simple-modal-description"
                     scroll={'paper'}
                     maxWidth={'md'}
        >
            <Grid
                container
                direction={'column'}
                alignItems='center'
                justify='center'
                className={'main-container'}
            >
                <Grid item xs={12} sm={12} md={12} className={'image'} justify='center' container>
                    <img src={img} alt={title}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className='details'>
                    <Typography variant='h6' className='title'>
                        {title}
                    </Typography>
                    <Typography variant='body2' className='subtitle'>
                        {subtitle.en}
                    </Typography>
                    <div className='skills'>
                        {stack.map((s) => (
                            <Skill key={s}>
                                <Typography variant='body2'>{s}</Typography>
                            </Skill>
                        ))}
                    </div>
                    <div className={'paragraph'}>{description.en}</div>
                    <Grid container direction='row' justify={'flex-start'}>
                        <StyledLink href={demoURL}>
                            <Button
                                variant='contained'
                                color='primary'
                                size='large'
                            >
                                Demo
                            </Button>
                        </StyledLink>
                        <StyledLink href={gitURL}>
                            <Button
                                variant='outlined'
                                color='primary'
                                size='large'
                            >
                                Code
                            </Button>
                        </StyledLink>
                    </Grid>
                </Grid>
            </Grid>

        </StyledModal>
    );
};

export default MuiModal;
