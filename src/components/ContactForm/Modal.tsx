import React, { FunctionComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import styled from 'styled-components';
import { Button, Grid, Typography } from '@material-ui/core';
import { IProjects } from '../ProjectList/constants';
import { StyledLink } from '../../styles/StyledLink';
import media from '../../styles/style';


interface ModalProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledCloseButton = styled.button`
    position: absolute;
    font-size: 14px;
    top: 15px;
    right: 5px;
    border-radius: 50%;
    border: none;
    background: rgba(211, 211, 211, 0.6);
    color: ${({ theme }) => theme.colors.contrast};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
`;

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
          border-radius: 16px;
        height: auto;
        width: 100%;
    }
    .details {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${media.tablet`
  flex-direction: center !important;
  justify-content: center !important;
  `}
  }
  .title {
      font-family: 'Abril Fatface', sans-serif;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.text};
        ${media.tablet`
            margin: 0 auto;
         `}
    }
    .subtitle {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.secondary};
         ${media.tablet`
            margin: 0 auto;
         `}
    }
    .skills {
    margin: 15px 0;

      ${media.tablet`
            margin: 0 auto;
         `};
      margin-bottom: 8px;
    }
  button {
  margin-right: 15px;
  }
  .buttons {
  margin: 15px;
  }
  .paragraph {
        text-align: justify;
        color: ${({ theme }) => theme.colors.secondary};

  a {
    float: right;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
        text-decoration: underline;
    }
  } 
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
                     scroll={'body'}
                     maxWidth={'md'}
        >
            <Grid
                container
                direction={'column'}
                alignItems='center'
                justify='center'
                className={'main-container'}
            >
                <StyledCloseButton onClick={() => setOpen(false)}>X</StyledCloseButton>

                <Grid
                    container
                    direction={'column'}
                    alignItems='center'
                    justify='center'
                >
                    <Typography variant='h6' className='title'>
                        {title}
                    </Typography>
                    <Typography variant='body2' className='subtitle'>
                        {subtitle.en}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className={'image'} justify='center' container>
                    <img src={img} alt={title}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className='details'>

                    <div className='skills'>
                        {stack.map((s) => (
                            <Skill key={s}>
                                <Typography variant='body2'>{s}</Typography>
                            </Skill>
                        ))}
                    </div>
                    <div className={'paragraph'}>{description.en}</div>
                    <Grid container direction='row' justify={'flex-start'} className={'buttons'}>
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
